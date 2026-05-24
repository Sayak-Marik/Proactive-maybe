"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  type Product,
  type SortOption,
  sortOptions,
  colors,
  sizes,
  categories,
} from "@/lib/products"

interface CollectionPageProps {
  title: string
  description: string
  products: Product[]
  gender: "men" | "women"
  heroImage: string
}

export function CollectionPage({
  title,
  description,
  products,
  gender,
  heroImage,
}: CollectionPageProps) {
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false
    }
    if (selectedColors.length > 0 && !selectedColors.some((c) => product.colors.includes(c))) {
      return false
    }
    if (selectedSizes.length > 0 && !selectedSizes.some((s) => product.sizes.includes(s))) {
      return false
    }
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "bestsellers":
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)
      case "newest":
      default:
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
    }
  })

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
  }

  const activeFiltersCount =
    selectedCategories.length + selectedColors.length + selectedSizes.length

  const FilterContent = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["category", "color", "size"]} className="w-full">
        {/* Category Filter */}
        <AccordionItem value="category" className="border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pb-4">
              {categories[gender].filter((c) => c !== "All").map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color Filter */}
        <AccordionItem value="color" className="border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
            Color
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pb-4">
              {colors.map((color) => (
                <label
                  key={color}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => toggleColor(color)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {color}
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size Filter */}
        <AccordionItem value="size" className="border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 pb-4">
              {sizes[gender].map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`px-4 py-2 text-sm border rounded-md transition-all ${
                    selectedSizes.includes(size)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground"
          onClick={clearAllFilters}
        >
          Clear all filters
        </Button>
      )}
    </div>
  )

  return (
    <main className="pt-[104px]">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-3">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-8 py-4 overflow-x-auto scrollbar-hide">
            {categories[gender].map((category) => (
              <button
                key={category}
                onClick={() =>
                  category === "All" ? clearAllFilters() : toggleCategory(category)
                }
                className={`text-sm whitespace-nowrap transition-colors ${
                  (category === "All" && selectedCategories.length === 0) ||
                  selectedCategories.includes(category)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-border sticky top-[104px] bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm">
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-left">Filters</SheetTitle>
                  </SheetHeader>
                  <FilterContent />
                </SheetContent>
              </Sheet>

              {/* Active Filters Display */}
              <div className="hidden lg:flex items-center gap-2">
                {selectedCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="gap-1 pl-3 pr-2 py-1"
                  >
                    {category}
                    <button onClick={() => toggleCategory(category)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {selectedColors.map((color) => (
                  <Badge
                    key={color}
                    variant="secondary"
                    className="gap-1 pl-3 pr-2 py-1"
                  >
                    {color}
                    <button onClick={() => toggleColor(color)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {selectedSizes.map((size) => (
                  <Badge
                    key={size}
                    variant="secondary"
                    className="gap-1 pl-3 pr-2 py-1"
                  >
                    Size: {size}
                    <button onClick={() => toggleSize(size)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-muted-foreground hover:text-foreground ml-2"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} products
              </span>
            </div>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? "bg-muted" : ""}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-[180px]">
              <h2 className="text-sm font-medium mb-4">Filters</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No products match your filters
                </p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={product.href}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
        <Image
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-foreground text-background text-xs font-normal">
              New
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="secondary" className="text-xs font-normal">
              Bestseller
            </Badge>
          )}
        </div>
        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            size="sm"
            className="w-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-background"
          >
            Quick Add
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.color}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        {/* Color Swatches */}
        <div className="flex gap-1 pt-2">
          {product.colors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-border"
              style={{
                backgroundColor: getColorHex(color),
              }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground ml-1">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    Black: "#1a1a1a",
    White: "#ffffff",
    Navy: "#1e3a5f",
    Grey: "#9ca3af",
    Charcoal: "#374151",
    Olive: "#556b2f",
    Stone: "#a8a29e",
    Oatmeal: "#e8dcc4",
    Blush: "#f4c2c2",
    Sage: "#9dc183",
    Burgundy: "#722f37",
    Forest: "#228b22",
    Cream: "#fffdd0",
  }
  return colorMap[colorName] || "#e5e5e5"
}
