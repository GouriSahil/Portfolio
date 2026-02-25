import React, { useEffect, useState } from "react";

type LineType = "command" | "output" | "empty";

export interface TypewriterLine {
  type: LineType;
  text: string;
}

interface TypewriterTextProps {
  lines: TypewriterLine[];
  charDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  lines,
  charDelay = 40,
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsDone(true);
      return;
    }

    if (isDone) return;

    const line = lines[currentLine];
    if (!line) {
      setIsDone(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      if (currentChar < line.text.length) {
        setCurrentChar((prev) => prev + 1);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }, charDelay);

    return () => window.clearTimeout(timeout);
  }, [charDelay, currentChar, currentLine, isDone, lines, prefersReducedMotion]);

  return (
    <div className="font-mono text-sm leading-relaxed md:text-base">
      {lines.map((line, index) => {
        let renderedText = "";

        if (prefersReducedMotion || isDone || index < currentLine) {
          renderedText = line.text;
        } else if (index === currentLine) {
          renderedText = line.text.slice(0, currentChar);
        }

        const isActiveLine =
          !prefersReducedMotion && !isDone && index === currentLine;

        if (line.type === "empty") {
          return (
            <div key={index} className="h-5">
              {isActiveLine && (
                <span className="terminal-cursor inline-block h-4 w-[2px] bg-[var(--accent-primary)] align-middle" />
              )}
            </div>
          );
        }

        if (line.type === "command") {
          return (
            <div key={index} className="flex items-baseline">
              <span className="mr-2 text-[var(--accent-primary)]">$</span>
              <span className="text-[var(--text-primary)] whitespace-pre-wrap">
                {renderedText}
              </span>
              {isActiveLine && (
                <span className="terminal-cursor ml-1 inline-block h-4 w-[2px] bg-[var(--accent-primary)] align-middle" />
              )}
            </div>
          );
        }

        // output
        return (
          <div key={index} className="flex items-baseline">
            <span className="mr-2 text-[var(--text-secondary)]">&gt;</span>
            <span className="text-[var(--text-secondary)] whitespace-pre-wrap">
              {renderedText}
            </span>
            {isActiveLine && (
              <span className="terminal-cursor ml-1 inline-block h-4 w-[2px] bg-[var(--accent-primary)] align-middle" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TypewriterText;

