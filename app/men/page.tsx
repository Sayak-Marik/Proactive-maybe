import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionPage } from "@/components/collection-page"
import { menProducts } from "@/lib/products"

export const metadata = {
  title: "Men's Collection | VALANCE",
  description: "Shop men's premium athleisure and performance wear. Training essentials, joggers, hoodies, and more.",
}

export default function MensPage() {
  return (
    <>
      <Header />
      <CollectionPage
        title="Men's Collection"
        description="Performance wear engineered for movement. From training essentials to everyday comfort."
        products={menProducts}
        gender="men"
        heroImage="/images/mens_hero.png"
      />
      <Footer />
    </>
  )
}
