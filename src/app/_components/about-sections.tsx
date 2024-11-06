"use client";

import localFont from "next/font/local";
import { useState, useEffect } from "react";

import {
  CaretLeftSVG,
  CaretRightSVG,
  CircleSVG,
} from "~/app/_components/icons";

export const ledBoard = localFont({
  src: "/../../styles/advanced_led_board-7.ttf",
  display: "swap",
});

const infoBlobNames = ["gen", "prog-lang", "nat-lang"] as const;
type InfoBlobName = (typeof infoBlobNames)[number];

export function Tamagotchi() {
  const [infoIndex, setInfoIndex] = useState(0);
  const [nextInfoIndex, setNextInfoIndex] = useState(0);
  const infoName = infoBlobNames[infoIndex]!;
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(0);
    const timeId = setTimeout(() => setInfoIndex(nextInfoIndex), 150);
    return () => clearTimeout(timeId);
  }, [nextInfoIndex]);
  useEffect(() => {
    const timeId = setTimeout(() => setOpacity(100), 150);
    return () => clearTimeout(timeId);
  }, [infoIndex]);

  return (
    <div className="flex h-full w-[300px] flex-col items-center rounded-b-[50%] rounded-t-[100%] border-4 border-black bg-red-800">
      <div className="invisible py-6"></div>
      <div
        className={`${ledBoard.className} flex h-[180px] w-[200px] flex-col rounded-2xl rounded-t-3xl border-2 border-black bg-slate-200 p-4 font-semibold`}
      >
        <div
          className={`transition-all opacity-${opacity} overflow-y-auto overflow-x-clip text-wrap pl-1`}
        >
          <InfoDisplay info={infoName} />
        </div>
      </div>
      <div className="flex w-3/4 justify-between px-6 pt-4">
        <button
          className="h-[35px] w-[35px] rounded-[100%] border border-black bg-slate-400 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600"
          onClick={() =>
            setNextInfoIndex((x) =>
              x - 1 < 0 ? infoBlobNames.length - 1 : x - 1,
            )
          }
        >
          <CaretLeftSVG size="25px" />
        </button>
        <button className="flex h-[50px] w-[50px] items-center justify-center rounded-[100%] border border-black bg-slate-400 p-1 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600">
          <CircleSVG size="20px" />
        </button>
        <button
          className="h-[35px] w-[35px] rounded-[100%] border border-black bg-slate-400 p-1 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600"
          onClick={() =>
            setNextInfoIndex((x) => (x + 1 < infoBlobNames.length ? x + 1 : 0))
          }
        >
          <CaretRightSVG size="25px" />
        </button>
      </div>
    </div>
  );
}

export function InfoDisplay({ info }: { info: InfoBlobName }) {
  if (info == "gen") {
    return <GeneralInfo />;
  } else if (info == "prog-lang") {
    return <ProgrammingInfo />;
  } else if (info == "nat-lang") {
    return <NaturalLangsInfo />;
  }
}

function GeneralInfo() {
  return (
    <>
      <h2 className="text-2xl">General</h2>
      <ul className="text-md w-full pl-2">
        <li>- Born in 2001.</li>
        <li>- Coding since 2017.</li>
        <li>- Full stack dev</li>
        <li>- Open to Work</li>
      </ul>
    </>
  );
}

function ProgrammingInfo() {
  return (
    <>
      <h2 className="text-2xl">Codes In</h2>
      <ul className="text-md w-full pl-2">
        <li>- JavaScript / TypeScript</li>
        <li>- Rust</li>
        <li>- Go</li>
        <li>- Java</li>
        <li>- Godot</li>
        <li>- C#</li>
      </ul>
    </>
  );
}

function NaturalLangsInfo() {
  return (
    <>
      <h2 className="text-2xl">Talks In</h2>
      <p>Bilingual</p>
      <ul className="text-md w-full pl-2">
        <li>- English</li>
        <li>- Spanish</li>
      </ul>
    </>
  );
}
