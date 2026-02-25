import RepoCard from "@/components/RepoCard";

const Projects = () => {
  const projects = [
    {
      name: "flask-blog-platform",
      description:
        "A blog platform for Python developers, built from scratch with Flask and SQLAlchemy and deployed on Render. Focused on clean CRUD flows, templating with Jinja2, and a simple DX for publishing technical content.",
      stackLine: "Flask · SQLAlchemy · SQLite · Jinja2",
      status: "Live",
      year: "2025",
      liveUrl: "https://blogs.sahilgouri.me",
      codeUrl: "https://github.com/GouriSahil",
    },
    {
      name: "team-task-manager",
      description:
        "A Trello-inspired board for teams to manage work with drag-and-drop cards and per-user auth. Designed to practice RESTful API patterns, relational schema design, and handling real-time-style updates in a Python stack.",
      stackLine: "Flask · FastAPI · SQLAlchemy · REST APIs",
      status: "Completed",
      year: "2025",
      liveUrl: "",
      codeUrl: "https://github.com/GouriSahil",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" aria-label="Featured Projects Section">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--syntax-comment)]">
            // featured_projects
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            real-world python backend work with live deployments and public code
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <RepoCard
              key={index}
              name={projects[index].name}
              description={projects[index].description}
              stackLine={projects[index].stackLine}
              status={projects[index].status as "Live" | "Completed"}
              year={projects[index].year}
              liveUrl={projects[index].liveUrl || undefined}
              codeUrl={projects[index].codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
