import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TransformationsSection } from "@/components/transformations-section";
import { VideoSection } from "@/components/video-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { BlogSection } from "@/components/blog-section";
import { HappySpacesSection } from "@/components/happy-spaces-section";
import { TryForFreeSection } from "@/components/try-for-free-section";
import { HowItWorksCarousel } from "@/components/how-it-works-carousel";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <VideoSection />
      <HowItWorksSection />
      {/* <HowItWorksCarousel /> */}
      <TryForFreeSection />
      <PricingSection />
      <TransformationsSection />
      <TestimonialsSection />
      <HappySpacesSection />
      <BlogSection />
      <FAQSection />
    </main>
  );
}
