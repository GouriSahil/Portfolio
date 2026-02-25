import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [interactive, setInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePointer = () => setEnabled(pointerQuery.matches);
    const updateMotion = () => setPrefersReducedMotion(motionQuery.matches);

    updatePointer();
    updateMotion();

    pointerQuery.addEventListener("change", updatePointer);
    motionQuery.addEventListener("change", updateMotion);

    return () => {
      pointerQuery.removeEventListener("change", updatePointer);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive =
        !!target?.closest("a, button, input, textarea, [role='button']") ?? false;
      setInteractive(isInteractive);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 text-[var(--accent-primary)] mix-blend-screen"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontSize: "14px",
      }}
    >
      {interactive ? (
        <span
          className={
            prefersReducedMotion ? "" : "terminal-cursor inline-block align-middle"
          }
        >
          _
        </span>
      ) : (
        <span>+</span>
      )}
    </div>
  );
};

export default CustomCursor;

