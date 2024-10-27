"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import { JmLogoLettersSrc } from "~/app/_components/images";

export const GeneralView: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [yTranslate, setYTranslate] = useState("-translate-y-[200%]");
    const [bodyBG, setBodyBG] = useState("bg-slate-800");
    const [viewOpacity, setViewOpacity] = useState(0);
    useEffect(() => {
	setYTranslate("translate-y-0");
	let timeoutId:ReturnType<typeof setTimeout>|null = setTimeout(() => {
	    setBodyBG("bg-slate-200");
	    timeoutId = setTimeout(() => {
		setViewOpacity(100);
		timeoutId = null;
	    }, 1000);
	}, 1000);
	return () => timeoutId ? clearTimeout(timeoutId) : undefined;
    }, []);
    
  return <div className="w-full h-[100vh] bg-slate-300 flex justify-center items-center">
    <div className="h-1/2 min-w-[720px] w-3/4 grid grid-cols-8 gap-0">
      <div className={`col-span-1 h-full rounded-l-[25px] bg-purple-600 border-[6px] border-r border-black transition-transform ease-in-out duration-500 ${yTranslate}`}></div>
      <div className="col-span-6 h-full border-4 border-black">
        <div className={`w-full h-full flex border-8 border-slate-600 transition-[background-color] duration-[1s] delay-150 ${bodyBG}`}>{children}</div>
      </div>
      <div className={`col-span-1 h-full rounded-r-[25px] bg-purple-600 border-[6px] border-l border-black transition-transform ease-in-out duration-500 delay-500 ${yTranslate}`}></div>
    </div>
  </div>;
}

export const Time:React.FC<{ updates: boolean }> = ({ updates }) => {
  const [time, setTime] = useState<Date|null>(null);
  const hours   = time ? `${time.getHours()}`.padStart(2, "0")   : "--";
  const minutes = time ? `${time.getMinutes()}`.padStart(2, "0") : "--";
  const seconds = time ? `${time.getSeconds()}`.padStart(2, "0") : "--";
  if (typeof window != undefined && time == null && updates) {
    setTime(new Date());
  }
  useEffect(() => {
    if (updates) {
      let timeoutId = setTimeout(() => setTime(new Date()), 500);
      return () => clearTimeout(timeoutId);
    }
  }, [time]);

  return <span>{`${hours}:${minutes}`}<span className="text-xs">{':'+seconds}</span></span>
}

export const GameSlot:React.FC<{ title: string, imageSrc: string, action: () => void }> = ({ title, imageSrc, action }) => {
  /* const [isHovered, setIsHovered] = useState(false); */
  const imgSize = 250;
  return <div className="h-3/4 flex flex-col border-4 group justify-center">
    <h2 className="text-center invisible select-none text-bold text-sky-600 group-hover:visible group-hover:select-auto">{title}</h2>
    <button
      className="transition-all rounded-lg border-0 p-4 border-sky-400 group-hover:border-4 group-hover:p-2"
      onClick={action}
    >
      <div className="w-full h-full transition-all rounded-lg border-3 border-slate-300 bg-slate-400 shadow-lg group-hover:shadow-[0_0_5px_12px_#22d3ee25]">
	<Image src={imageSrc} alt={title} width={imgSize} height={imgSize} />
      </div>
    </button>
  </div>
}

function openInNewTab(url: string) {
  const ahref = document.createElement("a");
  ahref.href = url;
  ahref.target = "_blank";
  ahref.click();
}

export const MyGamesGrid:React.FC = () => {
  return <div className={"flex w-full h-5/6 px-8 opacity-0 animate-[fadeIn_500ms_ease-in-out_2s_forwards]"}>
    <div className="grid grid-cols-4 w-full h-[90%] pt-4 items-center gap-4">
      <GameSlot title="GitHub" imageSrc={JmLogoLettersSrc} action={() => openInNewTab("https://github.com/jmnuf")} />
      <GameSlot title="Info" imageSrc={JmLogoLettersSrc} action={() => console.log("TODO: Show information in tamagotchi") } />
      <GameSlot title="Twitch" imageSrc={JmLogoLettersSrc} action={() => openInNewTab("https://twitch.tv/jmnuf")} />
      <GameSlot title="TODO" imageSrc={JmLogoLettersSrc} action={() => console.log("TODO: Idk put something here")} />
    </div>
  </div>;
};
