
import { Code, Database, Server, Zap, Globe, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Flask", "FastAPI", "SQLAlchemy"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "SQL", "HTML/CSS"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "SQLite"],
      color: "from-blue-600 to-purple-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Git", "REST APIs", "Authentication"],
      color: "from-purple-600 to-blue-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["RESTful APIs", "JSON", "HTTP/HTTPS", "CORS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git & GitHub", "VS Code", "Postman", "Linux"],
      color: "from-purple-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4" aria-label="Technical Skills Section">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Specialized in Python backend development with experience in building scalable web applications
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group hover:border-blue-500/30">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-800/60 text-slate-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
