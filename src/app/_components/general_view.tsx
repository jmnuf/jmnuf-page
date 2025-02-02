"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function useTimeDisplay() {
  const [time, setTime] = useState<Date | null>(null);
  const hours = time ? `${time.getHours()}`.padStart(2, "0") : "--";
  const minutes = time ? `${time.getMinutes()}`.padStart(2, "0") : "--";
  const seconds = time ? `${time.getSeconds()}`.padStart(2, "0") : "--";
  if (typeof window != undefined && time == null) {
    setTime(new Date());
  }
  useEffect(() => {
    if (typeof window == undefined) return;
    const timeoutId = setTimeout(() => setTime(new Date()), 500);
    return () => clearTimeout(timeoutId);
  }, [time]);

  return [hours, minutes, seconds];
}

export const Time = () => {
  const [hours, minutes, seconds] = useTimeDisplay();
  return (
    <span>
      {`${hours}:${minutes}`}
      <span className="text-xs">{":" + seconds}</span>
    </span>
  );
};
export const TimeSkeleton = () => {
  return (
    <span>
      {`--:--`}
      <span className="text-xs">{":--"}</span>
    </span>
  );
};

export const GameSlot: React.FC<{
  title: string;
  href?: string;
  target?: string;
  image: React.JSX.Element;
  action?: () => void;
}> = ({ title, href, target, image, action }) => {
  /* const [isHovered, setIsHovered] = useState(false); */
  const container_tw =
    "transition-all w-full h-[250px] rounded-lg border-0 p-4 border-sky-400 group-hover:border-4 group-hover:p-2";
  const content = (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-sky-200 bg-slate-100 px-4 shadow-lg transition-all group-hover:border-0 group-hover:shadow-[0_0_5px_12px_#22d3ee25]">
      {image}
    </div>
  );
  return (
    <div className="group flex h-3/4 flex-col justify-center">
      <h2
        id={title}
        className="text-bold invisible select-none text-center text-sky-600 group-hover:visible group-hover:select-auto"
      >
        {title}
      </h2>
      {href ? (
        <Link className={container_tw} href={href} target={target}>
          {content}
        </Link>
      ) : (
        <button className={container_tw} onClick={action}>
          {content}
        </button>
      )}
    </div>
  );
};
