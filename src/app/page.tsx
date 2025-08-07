import { CategoriesSection } from "@/components/home/cotegories-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HeroSection } from "@/components/home/hero-section";
import { LocationSection } from "@/components/home/location-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { PromotionsSection } from "@/components/home/promotions-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <PromotionsSection />
      <TestimonialsSection />
      <LocationSection />
      <NewsletterSection />
    </main>
  )
}
