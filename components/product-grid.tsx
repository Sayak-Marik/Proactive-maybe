import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Performance Training Tee",
    price: 68,
    color: "Stone",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
    href: "#",
    isNew: true,
  },
  {
    id: 2,
    name: "Tapered Jogger",
    price: 98,
    color: "Charcoal",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
    href: "#",
    isNew: false,
  },
  {
    id: 3,
    name: "Compression Tank",
    price: 58,
    color: "Onyx",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    href: "#",
    isNew: true,
  },
  {
    id: 4,
    name: "Training Short",
    price: 78,
    color: "Slate",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=2070&auto=format&fit=crop",
    href: "#",
    isNew: false,
  },
  {
    id: 5,
    name: "Tech Hoodie",
    price: 128,
    color: "Heather Grey",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
    href: "#",
    isNew: false,
  },
  {
    id: 6,
    name: "Performance Polo",
    price: 88,
    color: "Navy",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2015&auto=format&fit=crop",
    href: "#",
    isNew: true,
  },
]

export function ProductGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Just Dropped
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              New arrivals
            </h2>
          </div>
          <Link 
            href="#"
            className="text-sm text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 transition-all w-fit"
          >
            View all
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-14">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-sm mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 text-xs tracking-wider uppercase bg-background/90 text-foreground border-0"
                  >
                    New
                  </Badge>
                )}
                {/* Quick Add */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-background/95 backdrop-blur-sm text-foreground text-sm tracking-wider uppercase hover:bg-background transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="text-sm font-normal text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.color}
                </p>
                <p className="text-sm font-medium text-foreground">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
