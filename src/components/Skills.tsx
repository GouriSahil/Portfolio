import TerminalWindow from "@/components/TerminalWindow";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4" aria-label="Technical Skills Section">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="mb-2">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--syntax-comment)]">
            // technical_skills
          </h2>
        </header>

        <TerminalWindow title="skills.py">
          <div className="font-mono text-sm md:text-base">
            <div className="mb-4">
              <span className="text-[var(--syntax-comment)]">
                # skills.py — Sahil Gouri
              </span>
            </div>

            <pre className="whitespace-pre leading-relaxed">
              <span className="text-[var(--text-primary)]">developer_profile</span>
              <span className="text-[var(--text-primary)]"> = {"{"}{"\n"}</span>

              <span className="text-[var(--syntax-string)]">
                {"    \"languages\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : ["Python", "SQL"],{"\n\n"}
              </span>

              <span className="text-[var(--syntax-string)]">
                {"    \"frameworks\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : ["FastAPI", "Flask", "SQLAlchemy"],{"\n\n"}
              </span>

              <span className="text-[var(--syntax-string)]">
                {"    \"databases\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : ["PostgreSQL", "Redis", "SQLite"],{"\n\n"}
              </span>

              <span className="text-[var(--syntax-string)]">
                {"    \"backend_expertise\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : [{"\n"}
                {"        \"RESTful API design\", \n"}
                {"        \"JWT authentication\", \n"}
                {"        \"Relational database schema design\", \n"}
                {"        \"Async request handling\", \n"}
                {"    ],\n\n"}
              </span>

              <span className="text-[var(--syntax-string)]">
                {"    \"infrastructure\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : ["Docker", "Linux", "Git", "GitHub Actions"],{"\n\n"}
              </span>

              <span className="text-[var(--syntax-string)]">
                {"    \"currently_learning\""}
              </span>
              <span className="text-[var(--text-primary)]">
                : [{"\n"}
                {
                  "        \"System Design (scalable architectures)\", \n        \"Celery (distributed task queues)\", \n        \"AWS fundamentals\"\n"
                }
                {"    ]\n"}
              </span>

              <span className="text-[var(--text-primary)]">{"}"}</span>
              <span className="text-[var(--accent-primary)] text-xs">
                {"  [actively learning]"}
              </span>
            </pre>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Skills;
