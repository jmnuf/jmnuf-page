import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import HPBar from "~/app/_components/hp-bar";
import BattleTextBox from "~/app/_components/BattleTextBox";
import { JmLogoLetters, JmLogoChara } from "~/app/_components/images";

export const metadata: Metadata = {
  title: "@jmnuf Battle Ready!",
  description: "A wild JM is ready for battle!",
};

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col py-1 md:px-4 md:py-4">
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col items-end">
          <div className="flex">
            <HPBar
              className="w-[300px]"
              name="JM"
              type="Software Developer"
              level={24}
              currentHP={450}
              maxHP={600}
              gender="male"
            />
            <img
              className="mt-[2rem] h-[200px] w-[200px]"
              alt="Red"
              width={200}
              height={200}
              src="https://archives.bulbagarden.net/media/upload/d/d2/Spr_GS_Red.png"
            />
          </div>
        </div>

        <div className="flex">
          <img
            className="col-start-1 row-start-2"
            alt="Red"
            width={200}
            height={200}
            src="https://archives.bulbagarden.net/media/upload/1/12/FRLG_Red_Back.png"
          />
          <HPBar
            className="w-[300px]"
            name="Visitor"
            type="Challenger"
            level={24}
            currentHP={475}
            maxHP={800}
            gender="non-binary"
          />
        </div>
      </div>

      <div className="grid min-h-[12rem] grid-cols-2 grid-rows-1 gap-2 rounded bg-gray-900 px-4 py-2 md:grid-cols-3">
        <BattleTextBox />
      </div>
    </div>
  );
}
