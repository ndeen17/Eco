import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Code } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-neon/20 to-glow/20 blur-3xl -z-10 pulse-glow" />
          
          <div className="bg-card/80 backdrop-blur-sm border border-electric/30 rounded-2xl p-12 relative">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-electric/30">
                <Sparkles className="w-4 h-4 text-electric" />
                <span className="text-sm text-foreground/90">Ready to Start?</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Let's Create</span>
              <br />
              <span className="text-foreground">Something Amazing</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Just tell me what you want to build, and I'll bring your vision to life with 
              beautiful design, clean code, and modern functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="group">
                <MessageCircle className="w-5 h-5" />
                Start Chatting
              </Button>
              <Button variant="glow" size="lg" className="group">
                <Code className="w-5 h-5" />
                See Examples
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text mb-2">Real-time</div>
                <div className="text-muted-foreground text-sm">Live editing as we chat</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text mb-2">Custom</div>
                <div className="text-muted-foreground text-sm">Built for your needs</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text mb-2">Modern</div>
                <div className="text-muted-foreground text-sm">Latest technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};