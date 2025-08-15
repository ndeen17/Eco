import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Capabilities />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;
