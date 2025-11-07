"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>مكعبات سرعة رائدة للمحترفين والمبتدئين</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            أطلق العنان لسرعتك مع مكعباتنا
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            اكتشف أفضل مكعبات السرعة من العلامات التجارية الرائدة. سواء كنت مبتدئًا أو محترفًا، لدينا المكعب المثالي لك.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 cursor-pointer">
              <Link href="/products">
                تسوق المجموعة
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="cursor-pointer">
              <a href="#products">تعرف على المزيد</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-sm bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
