type Fn<Arguments extends any[], Return> = (...args: Arguments) => Return;

const appDiv = document.getElementById('app')!;

interface StringHTMLOptions {
  tag?: string;
  attrs?: Record<string, string | boolean | undefined | null>;
  className?: string;
  content?: string | Array<string> | Fn<[string | undefined, Record<string, string | boolean>], string>;
}

const createHtml = (options: StringHTMLOptions) => {
  const tag = options.tag;
  const attrs = {} as Record<string, string | boolean>;
  let sb = '';
  if (tag) sb += '<' + tag;
  if (tag && options.className && options.className.trim().length > 0) {
    sb += ' class="';
    sb += options.className.trim();
    sb += '"';
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
  if (typeof options.content == 'string') {
    sb += '\n    ' + options.content.split('\n').join('\n    ') + '\n';
  } else if (Array.isArray(options.content)) {
    sb += '\n    ' + options.content.join('\n    ') + '\n';
  } else if (typeof options.content == 'function') {
    sb += '\n    ' + options.content(tag, attrs) + '\n';
  } else if (!options.content) {
    // NOOP
  } else {
    const _never: never = options.content;
    _never;
    throw new Error('UNREACHABLE: createHtml options.content type = ' + typeof options.content);
  }
  if (tag) sb += '</' + tag + '>';
  return sb;
}

const div = (options: Omit<StringHTMLOptions, 'tag'>) => {
  (options as StringHTMLOptions).tag = 'div';
  return createHtml(options);
};

const frag = (options: Pick<StringHTMLOptions, 'content'>) =>
  createHtml(options);

const h2 = (content: string) => createHtml({ tag: 'h2', content });
const ul = (options: { className?: string; items: string[] }) => createHtml({
  tag: 'ul',
  className: options.className,
  content: () => {
    const tag = options.items.length >= 6 ? 'div' : undefined;
    const className = 'grid grid-cols-2';
    return createHtml({
      tag, className,
      content: options.items.map(content => createHtml({ tag: 'li', className: 'w-max pr-6', content })),
    });
  },
});

const DataListDisplay = (options: { title: string, data: Array<string> }) =>
  createHtml({
    tag: 'div',
    className: 'm-2 flex flex-col items-center border border-1 border-sky-900',
    content: [
      h2(options.title),
      div({
        className: 'h-1 bg-sky-900 w-full',
      }),
      ul({ className: 'list-[square]', items: options.data }),
    ],
  });


appDiv.innerHTML = frag({
  content: [
    div({
      className: 'flex flex-col items-center',
      content: [
        createHtml({
          tag: 'h1',
          className: 'text-center text-slate-50 py-4 text-3xl',
          content: 'jmnuf\'s Corner',
        }),

        createHtml({
          tag: 'p',
          className: 'text-center text-pink-50 py-1 w-1/2',
          content: 'A software engineer/developer that loves building and exploring random things. I love simple things even when simple is not the easier path. I can also appreciate, build and work with high levels of complexity when required.',
        }),
      ],
    }),

    div({
      className: 'bg-pink-200 text-purple-800 px-2 py-4 md:px-4 grid grid-cols-1 md:grid-cols-2',
      content: [
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

    createHtml({
      tag: 'footer',
      className: 'text-center bg-slate-900 text-pink-100 pt-4 pb-2',
      content: [
        createHtml({ tag: 'p', content: 'Built by hand with love and no AI.' }),
        createHtml({ tag: 'p', content: () => 'Copyright &copy; 2023 - ' + (new Date()).getFullYear(), }),
      ],
    }),
  ],
});



