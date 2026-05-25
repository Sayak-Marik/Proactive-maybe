import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionPage } from "@/components/collection-page"
import { womenProducts } from "@/lib/products"

export const metadata = {
  title: "Women's Collection | V A L E N C E",
  description: "Shop women's premium athleisure and performance wear. Leggings, sports bras, hoodies, and more.",
}

export default function WomensPage() {
  return (
    <>
      <Header />
      <CollectionPage
        title="Women's Collection"
        description="Designed for strength and grace. Premium activewear that moves with you."
        products={womenProducts}
        gender="women"
        heroImage="/images/womens_hero.png"
      />
      <Footer />
    </>
  )
}
