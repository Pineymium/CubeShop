"use client"

import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart-drawer"
import { Cable as Cube } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
            <Cube className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">متجر المكعبات</span>
        </div>

        <nav className="flex items-center gap-6">
          <CartDrawer />
        </nav>
      </div>
    </header>
  )
}
