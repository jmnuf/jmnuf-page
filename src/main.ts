import type { StringHTMLChildren, StringHTMLOptions } from './html';
import { html } from './html';

import randartSSUrl from './images/randart.png?url';
import igomSSUrl from './images/igom.png?url';
import qleeiSSUrl from './images/qleei.png?url';

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
const qLink = (text: string, href: string) => Link({ href, children: text });

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
  { name: 'GitHub', link: 'https://github.com/jmnuf' },
  { name: 'X/Twitter', link: 'https://x.com/jmnuf_' },
  { name: 'Instagram', link: 'https://www.instagram.com/jmnuf_' },
  { name: 'Bluesky', link: 'https://bsky.app/profile/jmnuf.bsky.social' },
];

appDiv.innerHTML = html.Frag({
  children: [
    html.div({
      className: 'flex flex-col items-center',
      children: [
        html.h1({
          className: 'text-center text-slate-50 py-4 px-4 text-3xl',
          children: ['JM', html.br(), 'Software Dev & Artist'],
        }),

        html.div({
          className: 'grid grid-cols-1 px-4',
          children: [
            html.div({
              className: 'flex flex-col justify-center items-center text-center w-full md:col-span-11',
              children: [
                html.h2({ className: 'text-center', children: 'About Me' }),
                html.p({
                  className: 'py-1 px-4 md:w-1/2',
                  children: [
                    'A software engineer/developer that loves building and exploring random things. I love simple things even when simple is not the easier path. You can check out my ', Link({
                      children: 'GitHub',
                      href: 'https://github.com/jmnuf',
                    }), ' where I have some coding projects and experiments uploaded.', html.br(), html.br(),
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

            html.aside({
              className: 'relative py-2 md:absolute md:left-4 flex flex-col',
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

    html.section({
      className: 'py-4',
      children: [
        html.h2({
          className: 'underline decoration-dotted decoration-sky-400',
          children: 'My Favorite Projects',
        }),

        html.div({
          className: 'flex flex-wrap items-center gap-4 px-4',
          children: [

            html.div({
              className: 'w-full md:w-[calc(50%-0.5rem)] lg:flex-1 flex flex-col items-center pb-2',
              children: [
                html.h3({ children: 'RandArt' }),
                html.img({
                  attrs: { src: randartSSUrl }
                }),
                html.p({
                  className: 'md:w-3/4',
                  children: `${qLink('RandArt', 'https://jmnuf.github.io/randart/')} is a TypeScript random "art" generator based on a provided formula. Inspired by the project of similar name ${qLink('randomart by tsoding', 'https://github.com/tsoding/randomart')} which is actually written in C. I decided to build a version on the browser to see how well it could do. I can tell you it does not run fast by any means but it does run! Maybe I will see if I can make it not take half an hour to generate eventually. You can look at the code over at ${qLink('GitHub', 'https://github.com/jmnuf/randart/')}`
                })
              ],
            }),

            html.div({
              className: 'w-full md:w-[calc(50%-0.5rem)] lg:flex-1 flex flex-col items-center pb-2',
              children: [
                html.h3({ className: 'pt-4', children: 'Igom' }),
                html.img({
                  attrs: { src: igomSSUrl }
                }),
                html.p({
                  className: 'md:w-3/4',
                  children: `The funny thing about ${qLink('Igom', 'https://github.com/jmnuf/igom')} is that it named itself. Igom is a random "word" generator built with ${qLink('C3', 'https://c3-lang.org/')}. It has it's own view of what are valid syllables and randomly mashes them together to give you a supposed word. This one I use quite a bit for random mini-projects I build on my machine and don't want to think about the name when I'm initializing the project. Names can be changed later after all, if I somehow come up with a name which usually is never. Also yes the help message is incorrect, I forgot to fix it and haven't gotten back to it...`,
                }),
              ],
            }),

            html.div({
              className: 'w-full md:w-[calc(50%-0.5rem)] lg:flex-1 flex flex-col items-center pb-2',
              children: [
                html.h3({ className: 'pt-4', children: 'QLeii' }),
                html.img({ attrs: { src: qleeiSSUrl } }),
                html.p({
                  className: 'md:w-3/4',
                  children: `This project, as you could maybe guess, was named using Igom. ${qLink('QLeei', 'https://jmnuf.github.io/qleei-lang/playground/')} is an interpreted stack-based language developed in C. This project was an exploration of making a language that doesn't make use of an AST or at least avoids it as much as possible. It was done while I was taking a break from working on the design to do for another language that I'm trying to develop that has the temporary name of ${qLink('Eiba-Fu', 'https://github.com/jmnuf/eiba-fu')}.`
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    html.footer({
      className: 'text-center bg-slate-900 text-pink-100 pt-4 pb-2',
      children: [
        html.p({ children: 'Built in GNU Emacs with artisanally written code.' }),
        html.p({ children: () => 'Copyright &copy; 2023 - ' + (new Date()).getFullYear(), }),
      ],
    }),
  ],
});



