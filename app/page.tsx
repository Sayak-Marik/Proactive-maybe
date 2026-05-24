import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedCollections } from "@/components/featured-collections"
import { ProductGrid } from "@/components/product-grid"
import { PromoSection } from "@/components/promo-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCollections />
      <ProductGrid />
      <PromoSection />
      <Footer />
    </main>
  )
}
