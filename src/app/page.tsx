import type { Metadata } from "next";

import { JmLogoLetters, JmLogoChara } from "~/app/_components/images";
import {
  LowBatterySVG,
  GitBranchSVG,
  ScreenPlaySVG,
  DocumentCircleWrongSVG,
} from "~/app/_components/icons";
import { Time, GameSlot } from "~/app/_components/general_view";

export const metadata: Metadata = {
  title: "@jmnuf",
};

export default async function Home() {
  const imgSize = 250;
  const svgSize = 100;
  return (
    <div className="flex h-full w-full animate-[fadeIn_500ms_ease-in-out_forwards] flex-col opacity-0">
      <div className="flex w-full items-start justify-between">
        <div className="overflow-hidden rounded-full border-2 border-black">
          <JmLogoChara size={40} />
        </div>
        <div className="flex items-center gap-2">
          <Time />
          <LowBatterySVG size={"18px"} />
        </div>
      </div>
      <div
        className={
          "flex h-5/6 w-full animate-[fadeIn_500ms_ease-in-out_2s_forwards] px-8 opacity-0"
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
