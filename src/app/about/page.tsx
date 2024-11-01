import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

const ledBoard = localFont({
  src: "/../../styles/advanced_led_board-7.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About @jmnuf",
};

export default async function About() {
  return (
    <div className="grid h-full w-full animate-fadeIn grid-cols-1 grid-rows-10 gap-1 opacity-0">
      <div className="row-span-1 flex text-center">
        <h1 id="about-h" className="text-bold text-3xl">
          About
        </h1>
      </div>
      <div className="row-span-8 flex items-center justify-center">
        <div className="flex h-full w-[300px] flex-col items-center rounded-b-[50%] rounded-t-[100%] border-4 border-black bg-red-800">
          <div className="invisible py-6"></div>
          <div
            className={`${ledBoard.className} flex h-[180px] w-[180px] flex-col rounded-2xl rounded-t-3xl border-2 border-black bg-slate-200 p-4 font-semibold`}
          >
            <h2 className="text-2xl">Basic Info</h2>
            <div className="overflow-scroll">
              <ul className="text-md w-full list-disc pl-2">
                <li>- Born in 2001.</li>
                <li>- Coding since 2017.</li>
                <li>- Full stack dev</li>
                <li>- Open to Work</li>
              </ul>
            </div>
          </div>
          <div className="flex w-3/4 justify-between px-6 pt-4">
            <button className="h-[35px] w-[35px] rounded-[100%] border border-black bg-slate-400 p-1 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600">
              {"<"}
            </button>
            <button className="h-[50px] w-[50px] rounded-[100%] border border-black bg-slate-400 p-1 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600">
              {"o"}
            </button>
            <button className="h-[35px] w-[35px] rounded-[100%] border border-black bg-slate-400 p-1 transition-all hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600">
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="row-span-1 flex">
        <Link className="text-sm" href="/">
          {"<Home>"}
        </Link>
      </div>
    </div>
  );
}
