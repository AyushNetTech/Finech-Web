import ApiShowcase from "@/components/sections/ApiShowcase";
import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";
import SecuritySection from "@/components/sections/SecuritySection";
import Solution from "@/components/sections/Solution";
import SuccessStories from "@/components/sections/SuccessStories";
import PricingPage from "./pricing/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Solution/>
      <SecuritySection/>
      <SuccessStories/>
      <PricingPage/>
    </main>
  );
}