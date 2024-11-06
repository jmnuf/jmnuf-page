import type { Metadata } from "next";
import Link from "next/link";

import { HomeSVG } from "~/app/_components/icons";
import { Tamagotchi } from "~/app/_components/about-sections";

export default async function About() {
  return (
    <div className="grid h-full w-full animate-fadeIn grid-cols-1 grid-rows-10 gap-1 opacity-0">
      <div className="row-span-1 flex text-center">
        <h1 id="about-h" className="text-bold text-3xl">
          About
        </h1>
      </div>
      <div className="row-span-8 flex items-center justify-center">
        <Tamagotchi />
      </div>
      <div className="row-span-1 flex">
        <Link href="/">
          <HomeSVG size="30px" />
        </Link>
      </div>
    </div>
  );
}
