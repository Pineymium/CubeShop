"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{"انضم إلى المجتمع"}</h2>
            <p className="mb-8 text-pretty text-muted-foreground">
              {"احصل على عروض حصرية وإطلاق منتجات جديدة ونصائح الحل يتم تسليمها إلى بريدك الوارد"}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                {subscribed ? "تم الاشتراك!" : "اشترك"}
              </Button>
            </form>

            <p className="mt-4 text-sm text-muted-foreground">{"لا رسائل مزعجة. إلغاء الاشتراك في أي وقت."}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
