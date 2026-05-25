import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-6">
          Spring/Summer 2026
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 text-balance leading-tight">
          Elevate your performance
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-xl mx-auto mb-10 text-pretty">
          Premium menswear engineered for movement, designed for style. Train harder, recover better, look sharper.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="px-10 py-6 text-sm tracking-wider uppercase bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            Shop Collection
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-10 py-6 text-sm tracking-wider uppercase border-foreground/30 hover:bg-foreground hover:text-background transition-all"
          >
            New Arrivals
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-foreground/30 animate-pulse" />
      </div> */}
    </section>
  )
}
