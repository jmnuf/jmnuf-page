import type { Metadata } from "next";
import Link from "next/link";

import { HomeSVG } from "~/app/_components/icons";
import { InfoContent } from "~/app/_components/about-sections";

export const metadata: Metadata = {
  title: "About @jmnuf",
  description: "About programmer JM",
};

export default async function About() {
  return (
    <div className="flex h-full w-full animate-fadeIn flex-col justify-between gap-1 overflow-y-scroll bg-slate-100 p-4 opacity-0">
      <div className="b-1 flex h-[10%] p-1 text-center">
        <h1 id="about-h" className="text-bold text-5xl">
          About
        </h1>
      </div>
      <InfoContent />
      <div className="flex h-[10%]">
        <Link href="/">
          <HomeSVG
            size="30px"
            className="fill-neutral-500 hover:fill-cyan-400"
          />
        </Link>
      </div>
    </div>
  );
}
