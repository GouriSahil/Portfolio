import TerminalWindow from "@/components/TerminalWindow";
import TypewriterText, { TypewriterLine } from "@/components/TypewriterText";
import TerminalButton from "@/components/TerminalButton";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lines: TypewriterLine[] = [
    { type: "command", text: "whoami" },
    { type: "output", text: "Sahil Gouri" },
    { type: "empty", text: "" },
    { type: "command", text: "cat role.txt" },
    { type: "output", text: "Python Backend Developer" },
    { type: "empty", text: "" },
    { type: "command", text: "cat focus.txt" },
    {
      type: "output",
      text: "Building REST APIs with FastAPI & Flask, learning system design",
    },
    { type: "empty", text: "" },
    { type: "command", text: "cat stack.txt" },
    { type: "output", text: "FastAPI · Flask · PostgreSQL · Docker" },
    { type: "empty", text: "" },
    { type: "command", text: "" },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-start justify-center px-4 pt-16"
      aria-label="Hero Section"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10">
        <TerminalWindow
          title="sahil@portfolio:~"
          className="w-full text-lg md:text-xl lg:text-2xl"
        >
          <TypewriterText lines={lines} />
        </TerminalWindow>

        <nav
          className="flex gap-3 flex-nowrap overflow-x-auto"
          aria-label="Primary navigation and social links"
        >
          <TerminalButton
            label="github"
            href="https://github.com/GouriSahil"
          />
          <TerminalButton
            label="linkedin"
            href="https://linkedin.com/in/sahil-gouri"
          />
          <TerminalButton
            label="email"
            href="mailto:gourisahil9593@gmail.com"
          />
          <TerminalButton
            label="projects"
            onClick={scrollToProjects}
            className="border-[var(--accent-primary)] text-[var(--accent-primary)]"
          />
        </nav>
      </div>
    </section>
  );
};

export default Hero;
