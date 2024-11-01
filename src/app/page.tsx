import type { Metadata } from "next";
import Link from "next/link";

import { JmLogoLetters, JmLogoChara } from "~/app/_components/images";
import {
  LowBatterySVG,
  GitBranchSVG,
  ScreenPlaySVG,
  DocumentCircleWrongSVG,
} from "~/app/_components/icons";
import { Time } from "~/app/_components/general_view";

export const metadata: Metadata = {
  title: "@jmnuf",
};

export default async function Home() {
  const imgSize = 250;
  const svgSize = 100;
  return (
      <div className="flex h-full w-full animate-fadeIn flex-col opacity-0">
	  <div className="flex w-full items-start justify-between">
	      <div className="flex items-center gap-2">
              <div className="overflow-hidden rounded-full border-2 border-black">
		  <JmLogoChara size={40} />
              </div>
	      <h1 className="text-xl">Countermand @jmnuf</h1>
	      </div>
              <div className="flex items-center gap-2">
		  <Time />
		  <LowBatterySVG size={"18px"} />
              </div>
	  </div>
	  <div
              className={
	      "flex h-5/6 w-full px-8"
              }
	  >
              <div className="grid h-[90%] w-full grid-cols-4 items-center gap-4 pt-4">
		  <GameSlot
		      title="GitHub"
		      href="https://github.com/jmnuf"
		      target="_blank"
		      image={<GitBranchSVG size={svgSize} />}
		  />
		  <GameSlot
		      title="About"
		      href="/about"
		      headerId="about-h"
		      image={<JmLogoLetters size={imgSize} />}
		  />
		  <GameSlot
		      title="Twitch"
		      href="https://twitch.tv/jmnuf"
		      target="_blank"
		      image={<ScreenPlaySVG size={svgSize} />}
		  />
		  <GameSlot
		      title="Error 404"
		      image={<DocumentCircleWrongSVG size={svgSize} />}
		  />
              </div>
	  </div>
      </div>
  );
}

const GameSlot: React.FC<{
  title: string;
  headerId?: string;
  href?: string;
  target?: string;
  image: React.JSX.Element;
  action?: () => void;
}> = ({ title, href, headerId, target, image, action }) => {
  /* const [isHovered, setIsHovered] = useState(false); */
  const container_tw =
    "transition-all w-full h-[250px] rounded-lg border-0 p-4 border-sky-400 group-hover:border-4 group-hover:p-2";
  const content = (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-sky-200 bg-slate-100 px-4 shadow-lg transition-all group-hover:border-0 group-hover:shadow-[0_0_5px_12px_#22d3ee25]">
      {image}
    </div>
  );
  return (
    <div className="group flex h-3/4 flex-col justify-center">
      <h2
        id={headerId ?? title}
        className="text-bold opacity-50 select-none text-center text-sky-600 group-hover:opacity-100 group-hover:select-auto"
      >
        {title}
      </h2>
      {href ? (
        <Link className={container_tw} href={href} target={target}>
          {content}
        </Link>
      ) : (
        <button className={container_tw} onClick={action}>
          {content}
        </button>
      )}
    </div>
  );
};
