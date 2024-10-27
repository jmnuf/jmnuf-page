import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import { JmLogoLetters, JmLogoChara } from "~/app/_components/images";
import { LowBatterySVG } from "~/app/_components/icons";
import { GeneralView, Time, MyGamesGrid } from "~/app/_components/general_view";

export const metadata: Metadata = {
  title: "@jmnuf",
};

function wait(secs: number) {
    return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

export default async function Home() {
  return <GeneralView>
    <Displayer>
      <Suspense fallback={<Content skeleton={true} />}>
	<Content />
      </Suspense>
    </Displayer>
    <footer className="flex justify-center items-center absolute pt-2 pb-1 px-4 left-0 bottom-0 w-full bg-slate-600 text-slate-100"><p>{"Uicons by "}<a href="https://www.flaticon.com/uicons">Flaticon</a></p></footer>
  </GeneralView>;
}


const Displayer:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const animation_css = `opacity-0 animate-[fadeIn_500ms_ease-in_1s_forwards]`;//`transition-[opacity] delay-150 duration-500 opacity-${opacity}`;
    const layout_css = "h-full w-full flex p-1";
    return <div className={`${animation_css} ${layout_css}`}>{children}</div>;
};

const Content:React.FC<{skeleton?: boolean}> = async ({ skeleton = false }) => {
  const topRightContents = <div className="flex items-center gap-2">
    <Time updates={!skeleton} />
    {skeleton ? <span>-</span> : <LowBatterySVG size={"18px"} />}
  </div>;
  if (skeleton) {
    return <div className="w-full h-full flex flex-col opacity-0 animate-fadeIn delay-[1.75s]">
    <div className="w-full flex justify-between items-center">
      <div>{"(--)"}</div>
      {topRightContents}
    </div>
    <div className="flex w-full h-5/6 px-8 opacity-0 animate-[fadeIn_500ms_ease-in-out_2s_forwards]">
      <div className="grid grid-cols-4 w-full h-[90%] pt-4 items-center gap-4">
	<GameSkeleton withoutBG={true} />
	<GameSkeleton withoutBG={true} />
	<GameSkeleton withoutBG={true} />
	<GameSkeleton withoutBG={true} />
      </div>
    </div>
    </div>;
  }
  await wait(4);
  return <div className="w-full h-full flex flex-col opacity-0 animate-[fadeIn_500ms_ease-in-out_forwards]">
    <div className="w-full flex justify-between items-start">
      <div className="rounded-full overflow-hidden border-2 border-black"><JmLogoChara size={40} /></div>
      {topRightContents}
    </div>
    <MyGamesGrid />
  </div>;
};

const GameSkeleton = ({ withoutBG }: { withoutBG?: boolean }) => {
  if (withoutBG) {
    return <div className="h-3/4 rounded-lg border-3 border-slate-300 shadow-lg animate-pulse">
      <div className="opacity-10 p-4">
	<JmLogoLetters size={250} />
      </div>
    </div>
  }
  return <div className="h-3/4 rounded-lg border-3 border-slate-300 bg-slate-400 opacity-50 shadow-lg animate-pulse">
    <div className="opacity-10 p-4">
      <JmLogoLetters size={250} />
    </div>
  </div>
}
