import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionPage } from "@/components/collection-page"
import { menProducts } from "@/lib/products"

export const metadata = {
  title: "Men's Collection | V A L E N C E",
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
        heroImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
      />
      <Footer />
    </>
  )
}
