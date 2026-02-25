import { useCallback, useState } from "react";

type SectionId = "about" | "skills" | "projects" | "contact";

const links: { id: SectionId; label: string }[] = [
  { id: "about", label: "~/about" },
  { id: "skills", label: "~/skills" },
  { id: "projects", label: "~/projects" },
  { id: "contact", label: "~/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<SectionId>("about");

  const handleClick = useCallback((id: SectionId) => {
    setActive(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--bg-overlay)] bg-[rgba(13,17,23,0.9)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-xs md:text-sm text-[var(--text-secondary)]">
          <span className="text-[var(--accent-primary)]">sahil@portfolio</span>
          <span className="text-[var(--text-secondary)]">:~</span>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleClick(link.id)}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--bg-overlay)]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

