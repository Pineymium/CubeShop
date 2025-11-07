"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, ShoppingCart } from 'lucide-react'
import { useState } from "react"
import { useCart } from "@/components/cart-context"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  rating: number
  reviews: number
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product)

    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  return (
    <Card
      className="group overflow-hidden border-border transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `scale-in 0.5s ease-out ${index * 0.1}s backwards`,
      }}
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          }}
        />
        <div
          className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.05 : 0 }}
        />
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="ml-1 text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-balance line-clamp-2">{product.name}</h3>
        <p className="mb-4 text-sm text-muted-foreground text-pretty line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <Button size="default" className="gap-2 cursor-pointer" onClick={handleAddToCart} disabled={isAdding}>
            <ShoppingCart className="h-4 w-4" />
            {isAdding ? "Added!" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
