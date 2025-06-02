
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Python Backend
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable web applications with Flask, FastAPI, and modern backend technologies. 
            Currently developing innovative EdTech solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" size="lg" className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-all duration-300">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Button>
        </div>

        <Button 
          onClick={scrollToProjects}
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 animate-pulse"
        >
          View My Work
          <ArrowDown className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
