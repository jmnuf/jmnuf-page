"use client";
import { useState } from "react";
import Markdown from "./Markdown";
import BattleOptions from "./battle-options";
import type { BattleOptionType } from "./battle-options";

type ContentType = keyof typeof CONTENTS_MAP | "run";

const CONTENTS_MAP = {
  skills: `
- Bilingual (English/Ingles & Spanish/Español)
- Organizational: ie. Design doc writing, team planning, efficient in info delivery
- Eyes for simplicity: Will always attempt to keep systems simple to keep the work from complecting too much
- AI assisted dev: I know how to leverage AI to make me more productive and efficient
`,

  tech: `
## Always Learning!
JM is always open to learn new technologies, whether it be frameworks or libraries.

He has already done some projects with some frameworks/libraries though. Always quick to uptake and very self-driven for learning new things!
`,

  frameworks: `
| Some Known Frameworks | |
| - | - |
| NextJS       | Express            |
| SolidJS      | Astro              |
| Electron     | Tauri              |
| React Native | EGui (Rust UI)     |
`,

  libs: `
| Some Known Libraries | |
|    -     |        -        |
|   React  | Tanstack Query  |
|    Zod   |      Jotai      |
|  JQuery  |   TailwindCSS   |
`,

  exp: `
| Position                    | Time Spent     | Tech                          |
|               -             |        -       |              -                |
| Frontend Dev (Contractor)   | 1 month, 2025  | React/TypeScript              |
| Full Stack Dev (Contractor) | 2 months, 2025 | Node/Next/TypeScript          |
| Frontend Dev (Contractor)   | 2 months, 2024 | WordPress/JavaScript          |
| Full Stack Dev (Full time)  | 2022 - 2023    | JavaScript/Python/Godot/Mongo |
`,
} as const;

const BASE_TEXT =
  "Software Developer, JM is ready for conquest! What are you inspecting?";

export default function BattleTextBox() {
  const [text, setText] = useState(BASE_TEXT);
  const [runAttempts, setRunAttempts] = useState(0);
  const [content, setContent] = useState<ContentType | null>(null);
  const [menuStack, setMenuStack] = useState<
    { menu: BattleOptionType; content: ContentType | null }[]
  >([]);

  const pushMenuStack = (menu: BattleOptionType) => {
    setMenuStack([...menuStack, { menu, content }]);
  };
  const popMenuStack = () => {
    let menu = menuStack.pop();
    if (!menu) menu = { menu: "base", content: null };
    setMenuStack(menuStack);
    setContent(menu.content);
    return menu;
  };

  return (
    <>
      <div className="border border-2 border-slate-200 px-4 py-3 md:col-span-2">
        {content == null ? (
          text
        ) : (
          <TextContent type={content} runAttempt={runAttempts} />
        )}
      </div>
      <BattleOptions
        onOptionSelected={(event) => {
          if (event.label === "Close" || event.type === "confirm") {
            const prev = popMenuStack();
            event.setOptionsType(prev.menu);
            return;
          }

          if (event.type === "tech") {
            console.log(event.type);
            switch (event.label) {
              case "Frameworks":
                pushMenuStack(event.type);
                setContent("frameworks");
                event.setOptionsType("submenu");
                break;
              case "Libraries":
                pushMenuStack(event.type);
                setContent("libs");
                event.setOptionsType("submenu");
                break;
            }
            return;
          }

          if (event.type !== "base") {
            return;
          }

          switch (event.label) {
            case "Skills":
              pushMenuStack(event.type);
              setContent("skills");
              event.setOptionsType("submenu");
              break;
            case "Tech Used":
              pushMenuStack(event.type);
              setContent("tech");
              event.setOptionsType("tech");
              break;
            case "Experiences":
              pushMenuStack(event.type);
              setContent("exp");
              event.setOptionsType("submenu");
              break;
            case "Run":
              event.setOptionsType("confirm");
              const attempt = runAttempts + 1;
              setRunAttempts(attempt);
              setContent("run");
              break;
          }
        }}
        onOptionFocus={(event) => {
          if (event.type !== "base") {
            return;
          }

          switch (event.label) {
            case "Skills":
              setText("Inspect known skills of JM");
              break;
            case "Tech Used":
              setText("Check the tech JM has used");
              break;
            case "Experiences":
              setText("List some experiences of JM");
              break;
            case "Run":
              setText("An early retreat is a valid strategy when possible!");
              break;
            default:
              setText(event.label);
              break;
          }
        }}
        onOptionBlur={(event) => {
          if (event.type !== "base") return;
          setText(BASE_TEXT);
        }}
      />
    </>
  );
}

function TextContent({
  type,
  runAttempt,
}: {
  type: ContentType;
  runAttempt: number;
}) {
  if (type === "run") {
    const counter = runAttempt === 1 ? "" : ` (x${runAttempt})`;
    return (
      <Markdown>
        {`Failed to run away?!${counter}${runAttempt < 5 ? "" : "\n\nPersistence is a cool trait to have"}`}
      </Markdown>
    );
  }

  const content = CONTENTS_MAP[type];
  if (!content) return null;

  return <Markdown>{content}</Markdown>;
}
