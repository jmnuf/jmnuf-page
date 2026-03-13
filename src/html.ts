export type Fn<Arguments extends any[], Return> = (...args: Arguments) => Return;

export type StringHTMLChildren =
  | string
  | Array<string>
  | Fn<[string | undefined, StringHTMLOptions['attrs']], string>
  ;

export interface StringHTMLOptions {
  tag?: keyof HTMLElementTagNameMap | (string & {});
  id?: string;
  attrs?: Record<string, string | boolean | undefined | null>;
  className?: string;
  children?: StringHTMLChildren;
}

const createHtml = (options: StringHTMLOptions) => {
  const tag = options.tag;
  const attrs = {} as Record<string, string | boolean>;
  let sb = '';
  if (tag) sb += '<' + tag;
  if (tag && options.id) sb += ' id=' + JSON.stringify(options.id.trim());
  if (tag && options.className && options.className.trim().length > 0) {
    sb += ' class=' + JSON.stringify(options.className.trim());
  }
  if (tag && options.attrs) {
    for (const [name, value] of Object.entries(options.attrs)) {
      if (value == null) continue;
      sb += ' ';
      if (typeof value == 'string') {
        sb += name + '="';
        sb += value + '"';
        attrs[name] = value;
        continue;
      }
      if (typeof value == 'boolean') {
        if (value) sb += name;
        attrs[name] = value;
        continue;
      }
    }
  }
  if (tag === 'br') return sb + ' />';
  if (tag) sb += '>';
  if (typeof options.children == 'string') {
    sb += options.children;
  } else if (Array.isArray(options.children)) {
    sb += options.children.join('');
  } else if (typeof options.children == 'function') {
    sb += options.children(tag, attrs);
  } else if (!options.children) {
    // NOOP
  } else {
    const _never: never = options.children;
    _never;
    throw new Error('UNREACHABLE: createHtml options.content type = ' + typeof options.children);
  }
  if (tag) sb += '</' + tag + '>';
  return sb;
}

export const Frag = (options: Pick<StringHTMLOptions, 'children'>) =>
  createHtml({ tag: undefined, children: options.children });

export const html = (function() {
  const obj = Object.create(null);
  return new Proxy(obj, {
    get(target, prop, receiver) {
      if (typeof prop == 'symbol') return Reflect.get(target, prop, receiver);
      if (prop === 'Frag' || prop.toLowerCase() == 'fragment') {
        return (options: Pick<StringHTMLOptions, 'children'>) => Frag({ children: options.children });
      }
      return (options: StringHTMLOptions = {}) => {
        options.tag = prop;
        return createHtml(options);
      };
    }
  }) as {
    [K in keyof HTMLElementTagNameMap]: (props?: Omit<StringHTMLOptions, 'tag'>) => ReturnType<typeof createHtml>;
  } & { Frag: typeof Frag };
})();

