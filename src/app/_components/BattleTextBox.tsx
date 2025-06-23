"use client";
import { useState } from "react";
import Markdown from "./Markdown";
import BattleOptions from "./battle-options";
import type { BattleOptionType  } from "./battle-options";

type ContentType =
  | "skills"
  | "tech"
  | "frameworks"
  | "libs"
  | "exp"
  | "run";

const BASE_TEXT = "Software Developer, JM is ready for conquest! What are you inspecting?";

export default function BattleTextBox() {
  const [text, setText] = useState(BASE_TEXT);
  const [runAttempts, setRunAttempts] = useState(0);
  const [content, setContent] = useState<ContentType | null>(null);
  const [menuStack, setMenuStack] = useState<{ menu: BattleOptionType; content: ContentType | null }[]>([]);

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
      <div className="md:col-span-2 px-4 py-3 border border-2 border-slate-200">
        {content == null ? text : <TextContent type={content} runAttempt={runAttempts} />}
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
  )
}

function TextContent({ type, runAttempt }: { type: ContentType, runAttempt: number }) {
  if (type === "skills") {
    return (
      <Markdown>{`
- Bilingual (English/Ingles & Spanish/Español)
- Organizational: ie. Design doc writing, team planning, efficient in info delivery
- Eyes for simplicity: Will always attempt to keep systems simple to keep the work from complecting too much
- AI assisted dev: I know how to leverage AI not to code for me but to make me and others more productive
`}
      </Markdown>
    );
  }

  if (type === "tech") {
    return (
      <Markdown>{`
## Always Learning!
JM is always open to learn new technologies, whether it be frameworks or libraries.

He has already done some projects with some frameworks/libraries though. Always quick to uptake and very self-driven for learning new things!
`}</Markdown>
    );
  }

  if (type === "frameworks") {
    return (
      <Markdown>{`
| Known Frameworks | |
| - | - |
| NextJS  | Express |
| SolidJS | Astro  | 
`}
      </Markdown>
    );
  }

  if (type === "libs") {
    return (
      <Markdown>{`
| Known Libraries | |
| - | - |
| React | Tanstack Query |
`}
      </Markdown>
    );
  }

  if (type === "run") {
    const counter = runAttempt === 1 ? "" : ` (x${runAttempt})`;
    return (
      <Markdown>
        {`Failed to run away?!${counter}${runAttempt < 5 ? "" : "\n\nPersistence is a cool trait to have"}`}
      </Markdown>
    );
  }
  return null;
}


