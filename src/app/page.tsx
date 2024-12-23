import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}
