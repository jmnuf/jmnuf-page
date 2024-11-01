import type {  Metadata } from "next";
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
	<div className="grid grid-cols-1 grid-rows-10 gap-1 h-full w-full animate-fadeIn opacity-0">
	    <div className="flex row-span-1 text-center">
		<h1 id="about-h" className="text-3xl text-bold">
		    About
		</h1>
	    </div>
	    <div className="flex row-span-8 justify-center items-center">
		<div className="flex flex-col items-center h-full w-[300px] bg-red-800 border-4 border-black rounded-t-[100%] rounded-b-[50%]">
		    <div className="py-6 invisible"></div>
		    <div className={`${ledBoard.className} font-semibold flex flex-col p-4 w-[180px] h-[180px] bg-slate-200 border-2 border-black rounded-t-3xl rounded-2xl`}>
			<h2 className="text-2xl">Basic Info</h2>
			<div className="overflow-scroll">
			<ul className="text-md list-disc w-full pl-2">
			    <li>- Born in 2001.</li>
			    <li>- Coding since 2017.</li>
			    <li>- Full stack dev</li>
			    <li>- Open to Work</li>
			</ul>
			</div>
		    </div>
		    <div className="flex w-3/4 px-6 pt-4 justify-between">
			<button className="transition-all bg-slate-400 hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600 border border-black p-1 w-[35px] h-[35px] rounded-[100%]">{"<"}</button>
			<button className="transition-all bg-slate-400 hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600 border border-black p-1 w-[50px] h-[50px] rounded-[100%]">{"o"}</button>
			<button className="transition-all bg-slate-400 hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-600 border border-black p-1 w-[35px] h-[35px] rounded-[100%]">{">"}</button>
		    </div>
		</div>
	    </div>
	    <div className="flex row-span-1">
		<Link className="text-sm" href="/">{"<Home>"}</Link>
	    </div>
	</div>
    );
}
