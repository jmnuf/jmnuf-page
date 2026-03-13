import type { StringHTMLChildren, StringHTMLOptions } from './html';
import { html } from './html';

const appDiv = document.getElementById('app')!;

const List = (options: { className?: string; items: StringHTMLChildren[] }) => html.ul({
  className: options.className,
  children: () => {
    const children = options.items.map((children) => html.li({ className: 'w-max pr-6', children }));
    const className = 'grid grid-cols-2';
    if (options.items.length >= 6) {
      return html.div({ className, children, });
    }
    return html.Frag({ children });
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
      html.h3({
        children: options.title,
        className: 'text-pink-100 text-xl bg-slate-900 w-full',
      }),
      html.div({ className: 'h-1 bg-sky-900 w-full', }),
      List({ className: 'list-[square]', items: options.data }),
    ],
  });


interface SocialMedia {
  name: string;
  link: string;
}
const Socials: SocialMedia[] = [
  { name: 'X/Twitter', link: 'https://x.com/jmnuf_' },
  { name: 'GitHub', link: 'https://github.com/jmnuf' },
  { name: 'InstaGram', link: 'https://www.instagram.com/jmnuf_' },
];

appDiv.innerHTML = html.Frag({
  children: [
    html.div({
      className: 'flex flex-col items-center',
      children: [
        html.h1({
          className: 'text-center text-slate-50 py-4 text-3xl',
          children: ['JM', html.br(), 'Software Dev & Artist'],
        }),

        html.div({
          className: 'grid grid-cols-1 px-4 text-pink-50',
          children: [
            html.aside({
              className: 'absolute left-4 md:flex flex-col',
              children: [
                html.h2({ className: 'text-center', children: 'Socials' }),
                html.div({
                  className: 'flex justify-center',
                  children: [
                    html.ul({
                      className: 'list-disc',
                      children: Socials.map((social) => html.li({
                        children: Link({ children: social.name, href: social.link }),
                      })),
                    }),
                  ],
                }),
              ],
            }),

            html.div({
              className: 'flex flex-col justify-center items-center text-center w-full md:col-span-11',
              children: [
                html.h2({ className: 'text-center', children: 'About Me' }),
                html.p({
                  className: 'py-1 px-4 w-1/2',
                  children: [
                    'A software engineer/developer that loves building and exploring random things. I love simple things even when simple is not the easier path. You can check out my ', Link({
                      children: 'GitHub',
                      href: 'https://github.com/jmnuf',
                    }), ' where I have some coding projects and experiments uploaded.', html.br(),
                    'I also do a bit of music which you can check over at my ', Link({
                      children: 'Spotify',
                      href: 'https://open.spotify.com/artist/0RNgRYXIdrgG6xOfHNPU7V',
                    }), '. I love doing music just as a fun and stress relieving hobby so it\'s not made to garner appeal in any way but my own. If you like it or dislike and want to tell me you can ', Link({
                      children: '@ me',
                      href: 'https://x.com/jmnuf_',
                    }), '!'
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    html.section({
      className: 'bg-pink-200 text-purple-800 px-2 py-4 md:px-4 flex flex-col gap-2',
      children: [
        html.h2({ children: 'My Skills', }),
        html.div({
          className: 'grid grid-cols-1 md:grid-cols-2',
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
      ],
    }),

    html.div({}),

    html.footer({
      className: 'text-center bg-slate-900 text-pink-100 pt-4 pb-2',
      children: [
        html.p({ children: 'Built by hand with love and no AI.' }),
        html.p({ children: () => 'Copyright &copy; 2023 - ' + (new Date()).getFullYear(), }),
      ],
    }),
  ],
});



