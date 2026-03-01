import ApiShowcase from "@/components/sections/ApiShowcase";
import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <ApiShowcase />
    </main>
  );
}