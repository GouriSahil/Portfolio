
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Trello Clone",
      description: "A full-featured project management application built with Flask and FastAPI, featuring real-time collaboration, drag-and-drop functionality, and user authentication.",
      technologies: ["Flask", "FastAPI", "SQLAlchemy", "PostgreSQL", "Authentication", "REST APIs"],
      features: [
        "Real-time board collaboration",
        "Drag & drop card management", 
        "User authentication & authorization",
        "RESTful API architecture",
        "Database management with SQLAlchemy"
      ],
      status: "Completed",
      year: "2024",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "EdTech Learning Platform",
      description: "An innovative educational technology platform designed to help students learn more effectively through interactive features and progress tracking.",
      technologies: ["Python", "Flask", "Database Design", "User Management", "Progress Tracking"],
      features: [
        "Interactive learning modules",
        "Student progress tracking",
        "User management system",
        "Content delivery system",
        "Performance analytics"
      ],
      status: "In Development",
      year: "2024",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world applications showcasing my backend development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  {project.status === "Completed" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
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
