import ApiShowcase from "@/components/sections/ApiShowcase";
import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";
import Solution from "@/components/sections/Solution";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Solution/>
      <ApiShowcase />
    </main>
  );
}