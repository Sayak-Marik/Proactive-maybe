import Link from "next/link"
import Image from "next/image"

const collections = [
  {
    id: 1,
    title: "Training Essentials",
    subtitle: "Peak performance",
    image: "/images/cat_training.png",
    href: "#",
  },
  {
    id: 2,
    title: "Performance Wear",
    subtitle: "Train harder",
    image: "/images/cat_performance.png",
    href: "#",
  },
  {
    id: 3,
    title: "Loungewear",
    subtitle: "Rest & recover",
    image: "/images/cat_loungewear.png",
    href: "#",
  },
  {
    id: 4,
    title: "Outdoor",
    subtitle: "Explore more",
    image: "/images/cat_outdoor.png",
    href: "#",
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 lg:mb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Curated For You
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
          Shop by collection
        </h2>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.href}
            className="group relative aspect-[4/5] overflow-hidden bg-muted rounded-sm"
          >
            {/* Image */}
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
              <p className="text-sm uppercase tracking-widest text-background/80 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {collection.subtitle}
              </p>
              <h3 className="text-2xl lg:text-3xl font-light text-background translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {collection.title}
              </h3>
              <div className="mt-4 overflow-hidden">
                <span className="inline-block text-sm text-background/90 border-b border-background/50 pb-0.5 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
