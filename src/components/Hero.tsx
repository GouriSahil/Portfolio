
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
          <p className="text-lg md:text-xl text-slate-400 mb-4 font-medium">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Alex Johnson
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Python Backend Developer
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable web applications with Flask, FastAPI, and modern backend technologies. 
            Currently developing innovative EdTech solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" size="lg" className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-slate-400 text-slate-300 hover:bg-slate-500 hover:text-white transition-all duration-300 font-medium">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Button>
        </div>

        <Button 
          onClick={scrollToProjects}
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-8"
        >
          View My Work
          <ArrowDown className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Refined floating elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
