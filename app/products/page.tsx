"use client"

import { useState } from "react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

const allProducts = [
  // 2x2 Cubes
  {
    id: 10,
    name: "GAN 251 M Pro 2x2",
    price: 24.99,
    image: "/gan-251-m-pro-2x2-speedcube-magnetic-compact.jpg",
    description: "Premium 2x2 with magnetic positioning system and smooth corner cutting",
    rating: 4.8,
    reviews: 345,
    type: "2x2",
  },
  {
    id: 11,
    name: "MoYu WeiPo WR M 2x2",
    price: 19.99,
    image: "/moyu-weipo-wr-m-2x2-speedcube-magnetic-world-recor.jpg",
    description: "World Record 2x2 edition with adjustable magnets and lightweight design",
    rating: 4.7,
    reviews: 267,
    type: "2x2",
  },
  {
    id: 12,
    name: "QiYi MS 2x2",
    price: 14.99,
    image: "/qiyi-ms-2x2-speedcube-magnetic-budget-friendly.jpg",
    description: "Budget-friendly magnetic 2x2 with excellent performance for beginners",
    rating: 4.6,
    reviews: 512,
    type: "2x2",
  },
  // 3x3 Cubes
  {
    id: 1,
    name: "GAN 12 MagLev 3x3",
    price: 64.99,
    image: "/gan-12-maglev-3x3-speedcube-flagship-blue-modern-p.jpg",
    description: "Flagship MagLev technology with UV coating, corner magnets, and adjustable tension system",
    rating: 4.9,
    reviews: 892,
    type: "3x3",
  },
  {
    id: 2,
    name: "MoYu WeiLong WR M 2021",
    price: 49.99,
    image: "/moyu-weilong-wr-m-2021-speedcube-maglev-purple-pro.jpg",
    description: "World Record edition with dual adjustment system and MagLev core technology",
    rating: 4.8,
    reviews: 654,
    type: "3x3",
  },
  {
    id: 3,
    name: "QiYi Tornado V3 Pioneer",
    price: 39.99,
    image: "/qiyi-tornado-v3-pioneer-speedcube-stickerless-brig.jpg",
    description: "Pioneer edition with center travel adjustment and premium factory setup",
    rating: 4.7,
    reviews: 523,
    type: "3x3",
  },
  {
    id: 4,
    name: "GAN 356 X V2",
    price: 54.99,
    image: "/gan-356-x-v2-speedcube-stickerless-adjustable-prod.jpg",
    description: "Classic flagship model with numerical IPG core and adjustable elasticity and magnet strength",
    rating: 4.8,
    reviews: 1247,
    type: "3x3",
  },
  {
    id: 5,
    name: "MoYu RS3 M 2020",
    price: 24.99,
    image: "/moyu-rs3-m-2020-speedcube-budget-magnetic-bright-s.jpg",
    description: "Budget flagship with strong magnets and smooth turning, perfect for beginners",
    rating: 4.9,
    reviews: 2156,
    type: "3x3",
  },
  {
    id: 6,
    name: "YuXin Little Magic V2",
    price: 19.99,
    image: "/yuxin-little-magic-v2-speedcube-magnetic-colorful-.jpg",
    description: "Enhanced V2 edition with magnetic positioning and buttery-smooth corner cutting",
    rating: 4.6,
    reviews: 1834,
    type: "3x3",
  },
  {
    id: 7,
    name: "GAN 11 M Pro",
    price: 59.99,
    image: "/gan-11-m-pro-speedcube-uv-coated-professional-stic.jpg",
    description: "Professional grade with soft UV coating, adjustable GES nuts, and core corner magnets",
    rating: 4.9,
    reviews: 978,
    type: "3x3",
  },
  {
    id: 8,
    name: "MoYu WeiLong V9",
    price: 44.99,
    image: "/moyu-weilong-v9-speedcube-ball-core-uv-technology-.jpg",
    description: "Latest V9 edition with revolutionary ball-core UV technology and enhanced stability",
    rating: 4.8,
    reviews: 445,
    type: "3x3",
  },
  {
    id: 9,
    name: "X-Man Tornado V2 M",
    price: 34.99,
    image: "/x-man-tornado-v2-m-speedcube-ridged-flagship-dual-.jpg",
    description: "Speedcube with ridged design, dual adjustment, and factory-tuned performance",
    rating: 4.7,
    reviews: 712,
    type: "3x3",
  },
  // 4x4 Cubes
  {
    id: 13,
    name: "MoYu AoSu WR M 4x4",
    price: 44.99,
    image: "/moyu-aosu-wr-m-4x4-speedcube-world-record-magnetic.jpg",
    description: "World Record 4x4 with dual adjustment system and enhanced stability",
    rating: 4.9,
    reviews: 423,
    type: "4x4",
  },
  {
    id: 14,
    name: "GAN 460 M 4x4",
    price: 54.99,
    image: "/gan-460-m-4x4-speedcube-magnetic-flagship.jpg",
    description: "Premium 4x4 with GAN's signature magnetic positioning and smooth layer turning",
    rating: 4.8,
    reviews: 289,
    type: "4x4",
  },
  {
    id: 15,
    name: "QiYi MS 4x4",
    price: 29.99,
    image: "/qiyi-ms-4x4-speedcube-magnetic-budget-performance.jpg",
    description: "Budget-friendly magnetic 4x4 with excellent anti-pop mechanism",
    rating: 4.7,
    reviews: 567,
    type: "4x4",
  },
  {
    id: 16,
    name: "YJ MGC 4x4",
    price: 34.99,
    image: "/yj-mgc-4x4-speedcube-magnetic-smooth-turning.jpg",
    description: "Smooth turning 4x4 with adjustable magnets and excellent corner cutting",
    rating: 4.8,
    reviews: 391,
    type: "4x4",
  },
]

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [sortOrder, setSortOrder] = useState<string>("default")
  const { items } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  let filteredProducts =
    selectedType === "all" ? allProducts : allProducts.filter((product) => product.type === selectedType)

  if (sortOrder === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortOrder === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  return (
    <>
      <div className="min-h-screen pt-24 pb-20">
        <Link href="/" className="fixed left-4 top-4 z-50 cursor-pointer transition-transform hover:scale-105">
          <div className="flex items-center gap-2 bg-background px-2 py-1 rounded-lg shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary shadow-lg">
              <div className="grid h-6 w-6 grid-cols-2 grid-rows-2 gap-[2px]">
                <div className="bg-red-500 rounded-sm" />
                <div className="bg-blue-500 rounded-sm" />
                <div className="bg-green-500 rounded-sm" />
                <div className="bg-yellow-500 rounded-sm" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">CubeShop</span>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="fixed right-4 top-4 z-50 cursor-pointer"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>

        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1
              className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl"
              style={{ animation: "slide-up 0.6s ease-out" }}
            >
              Shop Our Collection
            </h1>
            <p
              className="text-pretty text-lg text-muted-foreground"
              style={{ animation: "slide-up 0.6s ease-out 0.1s backwards" }}
            >
              Find the perfect cube for your skill level and style
            </p>
          </div>

          {/* Filters and Sorting */}
          <div
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            style={{ animation: "slide-up 0.6s ease-out 0.2s backwards" }}
          >
            {/* Cube Type Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === "all" ? "default" : "outline"}
                onClick={() => setSelectedType("all")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                All Cubes
              </Button>
              <Button
                variant={selectedType === "2x2" ? "default" : "outline"}
                onClick={() => setSelectedType("2x2")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                2x2
              </Button>
              <Button
                variant={selectedType === "3x3" ? "default" : "outline"}
                onClick={() => setSelectedType("3x3")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                3x3
              </Button>
              <Button
                variant={selectedType === "4x4" ? "default" : "outline"}
                onClick={() => setSelectedType("4x4")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                4x4
              </Button>
            </div>

            {/* Sort Options */}
            <div className="flex gap-2">
              <Button
                variant={sortOrder === "low-to-high" ? "default" : "outline"}
                onClick={() => setSortOrder(sortOrder === "low-to-high" ? "default" : "low-to-high")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Price: Low to High
              </Button>
              <Button
                variant={sortOrder === "high-to-low" ? "default" : "outline"}
                onClick={() => setSortOrder(sortOrder === "high-to-low" ? "default" : "high-to-low")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Price: High to Low
              </Button>
            </div>
          </div>

          {/* Product Count */}
          <div
            className="mb-6 text-sm text-muted-foreground"
            style={{ animation: "slide-up 0.6s ease-out 0.3s backwards" }}
          >
            {`Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? "product" : "products"}`}
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2" style={{ animation: "slide-up 0.6s ease-out 0.4s backwards" }}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  )
}
