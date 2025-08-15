import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Neural Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <div className="floating absolute top-20 left-20 w-2 h-2 bg-electric rounded-full blur-sm"></div>
        <div className="floating absolute top-40 right-32 w-1 h-1 bg-neon rounded-full blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="floating absolute bottom-32 left-40 w-3 h-3 bg-glow rounded-full blur-sm" style={{animationDelay: '4s'}}></div>
        <div className="floating absolute bottom-20 right-20 w-2 h-2 bg-electric-light rounded-full blur-sm" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-electric/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm text-foreground/90">Powered by Advanced AI</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text">What Can</span>
          <br />
          <span className="text-foreground">I Build?</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm an AI that creates stunning web applications with beautiful design, 
          interactive animations, and cutting-edge functionality. Let me show you what's possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            See My Capabilities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glow" size="lg" className="group">
            <Zap className="w-5 h-5" />
            Start Building
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-muted-foreground">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">&lt;1s</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Custom Code</div>
          </div>
        </div>
      </div>
    </section>
  );
};