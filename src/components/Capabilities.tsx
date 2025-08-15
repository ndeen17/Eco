import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Smartphone, Zap, Database, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Modern UI/UX with stunning animations, gradients, and interactive elements that captivate users.",
    color: "text-electric"
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "TypeScript, React, and Tailwind CSS with semantic design systems and best practices.",
    color: "text-neon"
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Pixel-perfect designs that work flawlessly across all devices and screen sizes.",
    color: "text-glow"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized builds with Vite, efficient components, and smooth 60fps animations.",
    color: "text-electric-light"
  },
  {
    icon: Database,
    title: "Full-Stack Ready",
    description: "Supabase integration for authentication, databases, and real-time features.",
    color: "text-electric"
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built-in SEO best practices, meta tags, and performance optimization.",
    color: "text-neon"
  }
];

export const Capabilities = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From stunning designs to complex functionality, I can build anything you imagine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-muted/50 border-border/50 hover:border-electric/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${capability.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};