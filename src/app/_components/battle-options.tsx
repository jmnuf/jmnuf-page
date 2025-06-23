"use client";

import { useState, useEffect } from "react";

export type BattleOptionType = "base" | "tech" | "submenu" | "confirm";

interface BattleOptionSelectedEvent {
  type: BattleOptionType;
  label: string;
  setOptionsType: (type: BattleOptionType) => void;
}

type BattleOptionsProps = {
  onOptionFocus: (
    option: Omit<BattleOptionSelectedEvent, "setOptionsType">,
  ) => void;
  onOptionBlur: (option: { type: BattleOptionType }) => void;
  onOptionSelected: (option: BattleOptionSelectedEvent) => void;
  disabled?: boolean;
};

const BASE_OPTIONS = ["Skills", "Tech Used", "Experiences", "Run"] as const;
const SUBMENU_OPTIONS = ["Close"] as const;
const TECH_OPTIONS = ["Frameworks", "Libraries", "Close"] as const;

export type OptionLabel =
  | (typeof BASE_OPTIONS)[number]
  | (typeof SUBMENU_OPTIONS)[number]
  | (typeof TECH_OPTIONS)[number];

function get_menu_options(type: BattleOptionType) {
  switch (type) {
    case "base":
      return BASE_OPTIONS;
    case "tech":
      return TECH_OPTIONS;
    case "submenu":
      return SUBMENU_OPTIONS;
    case "confirm":
      return ["Ok"];
    default:
      return [];
  }
}

export default function BattleOptions({
  onOptionSelected,
  onOptionFocus,
  onOptionBlur,
  disabled,
}: BattleOptionsProps) {
  const [optionsType, setOptionsType] = useState<BattleOptionType>("base");
  const [focused, setFocused] = useState<string>("");

  const options = get_menu_options(optionsType) as Array<string>;
  disabled = disabled ?? false;

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = setTimeout(() => {
      timeoutId = null;
      if (focused.length === 0) {
        onOptionBlur({ type: optionsType });
        return;
      }
      onOptionFocus({ type: optionsType, label: focused });
    }, 100);
    return () => {
      if (timeoutId == null) return;
      clearTimeout(timeoutId);
    };
  }, [focused]);

  const baseTw =
    "w-full md:max-h-[3rem] text-center px-3 py-2 mb-1 border border-1 border-sky-100 focus:outline-none focus:bg-gray-700 focus:ring-2 focus:ring-blue-500";
  const xTw = disabled
    ? "cursor-not-allowed bg-gray-700 text-gray-400"
    : "hover:bg-gray-700 cursor-pointer";
  const tw = `${baseTw} ${xTw}`;

  const divGrid =
    options.length > 1
      ? "md:grid md:grid-cols-2 md:grid-rows-2"
      : "md:grid md:grid-cols-1 md:grid-rows-1";

  return (
    <div
      className={`flex w-full flex-col border border-2 border-slate-200 p-4 font-mono text-white select-none ${divGrid} gap-3`}
    >
      {options.map((label, idx) => (
        <button
          key={label}
          className={idx == 2 && options.length == 3 ? `${tw} col-span-2` : tw}
          type="button"
          disabled={disabled}
          onClick={() => {
            onOptionSelected({ type: optionsType, label, setOptionsType });
          }}
          onFocus={() => {
            setFocused(label);
          }}
          onBlur={() => {
            setFocused("");
          }}
          onMouseEnter={() => {
            setFocused(label);
          }}
          onMouseLeave={() => {
            setFocused("");
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
