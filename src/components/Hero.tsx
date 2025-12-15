import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative" aria-label="Hero Section">
      <div className="text-center max-w-4xl mx-auto">
        <header className="mb-8">
          <p className="text-lg md:text-xl text-slate-400 mb-4 font-medium">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sahil Gouri
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Python Backend Developer
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Python backend developer who builds web apps with Flask and FastAPI. I work on real projects, write APIs, handle databases, and make sure things scale.
          </p>
        </header>

        <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Social Links">
          <a href="https://github.com/GouriSahil" target="_blank" rel="noopener noreferrer" aria-label="Visit Sahil Gouri's GitHub profile">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5 mr-2" aria-hidden="true" />
              GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/sahil-gouri" target="_blank" rel="noopener noreferrer" aria-label="Visit Sahil Gouri's LinkedIn profile">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
              LinkedIn
            </Button>
          </a>
          <a href="mailto:gourisahil9593@gmail.com" aria-label="Send email to Sahil Gouri">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-slate-400 text-slate-300 hover:bg-slate-500 hover:text-white transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact
            </Button>
          </a>
        </nav>

        <Button 
          onClick={scrollToProjects}
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-8"
          aria-label="Scroll to projects section"
        >
          View My Work
          <ArrowDown className="w-5 h-5 ml-2" aria-hidden="true" />
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
