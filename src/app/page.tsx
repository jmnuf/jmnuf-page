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
    <div className="w-full h-full flex flex-col py-1 md:py-4 md:px-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-end w-full">
        <div className="flex">
          <HPBar className="w-[300px]" name="JM" type="Software Developer" level={24} currentHP={450} maxHP={600} gender="male" />
            <img
              className="w-[200px] h-[200px] mt-[2rem]"
              alt="Red"
              width={200}
              height={200}
              src="https://archives.bulbagarden.net/media/upload/d/d2/Spr_GS_Red.png"
            />
          </div>
        </div>

        <div className="flex">
            <img
              className="row-start-2 col-start-1"
              alt="Red"
              width={200}
              height={200}
              src="https://archives.bulbagarden.net/media/upload/1/12/FRLG_Red_Back.png"
            />
          <HPBar className="w-[300px]" name="Visitor" type="Challenger" level={24} currentHP={475} maxHP={800} gender="non-binary" />
        </div>
      </div>

      <div className="h-[12rem] grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-2 bg-gray-900 px-4 py-2 rounded">
        <BattleTextBox />
      </div>
    </div>
  );
}

