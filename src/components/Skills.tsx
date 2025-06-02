
import { Code, Database, Server, Zap, Globe, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Flask", "FastAPI", "Django", "SQLAlchemy"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Git", "Docker", "REST APIs", "Authentication"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["RESTful APIs", "JSON", "HTTP/HTTPS", "CORS"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git & GitHub", "VS Code", "Postman", "Linux"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized in Python backend development with experience in building scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
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
