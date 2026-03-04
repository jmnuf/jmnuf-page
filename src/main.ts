type Fn<Arguments extends any[], Return> = (...args: Arguments) => Return;

const appDiv = document.getElementById('app')!;

type StringHTMLChildren =
  | string
  | Array<string>
  | Fn<[string | undefined, StringHTMLOptions['attrs']], string>
  ;

interface StringHTMLOptions {
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

const Frag = (options: Pick<StringHTMLOptions, 'children'>) =>
  createHtml({ tag: undefined, children: options.children });

const html = (function() {
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

const List = (options: { className?: string; items: StringHTMLChildren[] }) => html.ul({
  className: options.className,
  children: () => {
    const tag = options.items.length >= 6 ? 'div' : undefined;
    const className = 'grid grid-cols-2';
    return createHtml({
      tag, className,
      children: options.items.map((children) => html.li({ className: 'w-max pr-6', children })),
    });
  },
});

const Link = (props: Omit<StringHTMLOptions, 'tag'> & { href?: string }) => html.a({
  children: props.children,
  className: 'text-sky-300 underline italic decoration-wavy ' + (props.className ?? ''),
  attrs: {
    href: props.href,
    target: '_blank',
    ref: 'noref',
    follow: 'nofollow',
    ...props.attrs,
  },
});

const DataListDisplay = (options: { title: string, data: Array<string> }) =>
  html.div({
    className: 'm-2 flex flex-col items-center border border-1 border-sky-900',
    children: [
      html.h2({
        children: options.title,
        className: 'text-pink-100 bg-slate-900 w-full',
      }),
      html.div({ className: 'h-1 bg-sky-900 w-full', }),
      List({ className: 'list-[square]', items: options.data }),
    ],
  });


appDiv.innerHTML = html.Frag({
  children: [
    html.div({
      className: 'flex flex-col items-center',
      children: [
        html.h1({
          className: 'text-center text-slate-50 py-4 text-3xl',
          children: 'JM a Software Dev & Artist',
        }),

        html.p({
          className: 'text-center text-pink-50 py-1 w-1/2',
          children: [
            'A software engineer/developer that loves building and exploring random things. I love simple things even when simple is not the easier path. You can check out my ', Link({
              children: 'GitHub',
              href: 'https://github.com/jmnuf',
            }), ' where I have some coding projects and experiments uploaded.', html.br(),
            'I also do a bit of music which you can check over at my ', Link({
              children: 'Spotify',
              href: 'https://open.spotify.com/artist/0RNgRYXIdrgG6xOfHNPU7V',
            }), '. I love doing music just as a fun and stress relieving hobby so it\'s not made to garner appeal in any way but my own. If you like it or dislike and want to tell me you can @ me in ', Link({
              children: 'X',
              href: 'https://x.com/jmnuf_',
            }), '!'
          ],
        }),
      ],
    }),

    html.div({
      className: 'bg-pink-200 text-purple-800 px-2 py-4 md:px-4 grid grid-cols-1 md:grid-cols-2',
      children: [
        DataListDisplay({
          title: 'General Skills',
          data: [
            'Bilingual (English/Spanish)',
            'Team communication',
            'General leadership',
            'Strong sense of responsability',
            'Interpersonal Skills',
          ],
        }),

        DataListDisplay({
          title: 'Tech Skills',
          data: [
            'Software Development',
            'Software Design',
            'Web Development',
            'Desktop Development',
            'Software Testing',
          ],
        }),

        DataListDisplay({
          title: 'Programming Languages',
          data: [
            'TypeScript', 'Rust',
            'C', 'C++',
            'Java 8', 'Python',
          ],
        }),

        DataListDisplay({
          title: 'Frameworks Known',
          data: [
            'React', 'SolidJS',
            'NextJS', 'EGUI (Rust)',
            'Qt (C++)', 'Java Swing',
          ],
        }),

      ],
    }),

    html.footer({
      className: 'text-center bg-slate-900 text-pink-100 pt-4 pb-2',
      children: [
        html.p({ children: 'Built by hand with love and no AI.' }),
        html.p({ children: () => 'Copyright &copy; 2023 - ' + (new Date()).getFullYear(), }),
      ],
    }),
  ],
});



