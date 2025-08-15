import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "React + TypeScript + Tailwind CSS",
  "Responsive design system",
  "Interactive animations",
  "SEO optimization",
  "Performance optimized",
  "Supabase integration",
  "Modern UI components",
  "Real-time capabilities",
  "Authentication & security",
  "Custom API development"
];

export const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Everything</span>
              <br />
              <span className="text-foreground">You Need</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I don't just create apps - I craft experiences. Every line of code is optimized, 
              every design element is purposeful, and every interaction is delightful.
            </p>
            <Button variant="hero" size="lg" className="group">
              Let's Build Something Amazing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-electric/30 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "slideInRight 0.6s ease-out forwards"
                }}
              >
                <div className="w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/30 transition-colors">
                  <Check className="w-4 h-4 text-electric" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};