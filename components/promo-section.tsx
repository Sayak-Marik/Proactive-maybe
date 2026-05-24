import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromoSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Image */}
          <div 
            className="relative aspect-[4/5] lg:aspect-auto bg-cover bg-center rounded-sm overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center py-8 lg:py-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance leading-tight">
              Engineered for performance
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
              We believe in creating pieces that push your limits. From the gym to the street, 
              every garment is designed with cutting-edge fabrics and precision engineering.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                4-way stretch technology
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Moisture-wicking fabrics
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Anti-odor treatment
              </li>
            </ul>
            <Button 
              variant="outline"
              className="w-fit px-8 py-6 text-sm tracking-wider uppercase border-foreground/30 hover:bg-foreground hover:text-background transition-all"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
