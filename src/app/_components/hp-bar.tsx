interface HPBarProps {
  name: string;
  level: number;
  type: string;
  currentHP: number;
  maxHP: number;
  gender: "male" | "female" | "non-binary";
  className?: string;
  currentXP?: number;
  maxXP?: number;
}

export default function HPBar({
  name,
  level,
  currentHP,
  maxHP,
  gender,
  currentXP,
  maxXP,
  type,
  className: xCss,
}: HPBarProps) {
  const hpPercentage = (currentHP / maxHP) * 100;
  const xpPercentage = currentXP && maxXP ? (currentXP / maxXP) * 100 : 0;

  // Inline HP color logic
  const hpColor =
    hpPercentage > 50 ? "#10b981" : hpPercentage > 20 ? "#f59e0b" : "#ef4444";

  // Inline gender icon logic
  const genderIcon =
    gender === "male" ? "♂" : gender === "female" ? "♀" : "⚲";

  // Inline gender color logic
  const genderColor =
    gender === "male" ? "#3b82f6" : gender === "female" ? "#ec4899" : "#8b5cf6";

  const tw = `bg-white border-4 border-black p-3 font-mono text-sm max-w-xs h-[150px] ${xCss ? ` ${xCss}` : ""}`;

  return (
    <div className={tw}>
      {/* Name, Gender, and Level */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-bold text-black">{name.toUpperCase()}</span>
          <span
            className="flex items-center text-lg leading-none font-bold"
            style={{ color: genderColor }}
          >
            {genderIcon}
          </span>
        </div>
        <span className="text-black">Lv{level}</span>
      </div>

      {/* Type */}
      <div className="mb-2 text-xs tracking-wide text-gray-600 uppercase">
        {type}
      </div>

      {/* HP Bar */}
      <div className="mb-1">
        <div className="mb-1 text-xs text-black">HP</div>
        <div className="bg-black p-1">
          <div className="relative h-2 bg-gray-300">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${hpPercentage}%`,
                backgroundColor: hpColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* HP Numbers */}
      <div className="mb-2 text-right text-xs text-black">
        {currentHP}/{maxHP}
      </div>

      {/* XP Bar (only if XP props are provided) */}
      {currentXP !== undefined && maxXP !== undefined && (
        <div>
          <div className="mb-1 text-xs text-black">EXP</div>
          <div className="bg-black p-1">
            <div className="relative h-1 bg-gray-300">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
