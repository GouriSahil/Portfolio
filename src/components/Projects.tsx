import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Personal Blog Platform",
      description: "My journey into web development started here! Built this blog from scratch following Corey Schafer's Flask tutorial, then made it my own by deploying it live with a custom domain. It's amazing how a simple tutorial can turn into something real that people can actually visit and use.",
      technologies: ["Flask", "Python", "SQLAlchemy", "SQLite", "Jinja2", "Bootstrap", "WTForms"],
      features: [
        "Blog creation & management with Flask-WTF forms",
        "Database handling with SQLAlchemy & SQLite",
        "Responsive frontend with Bootstrap styling",
        "Live deployment on Render with custom domain",
        "Clean, user-friendly interface"
      ],
      status: "Live",
      year: "2025",
      gradient: "from-green-500 to-teal-600",
      liveDemo: "https://blogs.sahilgouri.me"
    },
    {
      title: "Trello Clone",
      description: "A full-featured project management application built with Flask and FastAPI, featuring real-time collaboration, drag-and-drop functionality, and user authentication.",
      technologies: ["Flask", "FastAPI", "SQLAlchemy","Database Design", "Authentication", "REST APIs"],
      features: [
        "Real-time board collaboration",
        "Drag & drop card management", 
        "User authentication & authorization",
        "RESTful API architecture",
        "Database management with SQLAlchemy"
      ],
      status: "Completed",
      year: "2025",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "EdTech Learning Platform",
      description: "An innovative educational technology platform designed to help students learn more effectively through interactive features and progress tracking.",
      technologies: ["Python", "Flask", "User Management", "REST APIs", "OpenAI API",],
      features: [
        "AI-powered PDF & YouTube content summarization",
      "Interactive flashcard generation system",
      "Automated quiz creation from learning materials",
      "Visual mind map generation for better understanding"
      ],
      status: "In Development",
      year: "2024",
      gradient: "from-purple-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real-world applications showcasing my backend development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group overflow-hidden hover:border-blue-500/30">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400 text-sm">{project.year}</span>
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : project.status === "Live" ? "default" : "secondary"}
                    className={
                      project.status === "Completed" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : 
                      project.status === "Live" ? "bg-green-500/20 text-green-300 border-green-500/30" :
                      "bg-purple-500/20 text-purple-300 border-purple-500/30"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-slate-800/60 text-slate-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {project.liveDemo && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
                    onClick={() => window.open('https://github.com/GouriSahil', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
