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
    name: "جان 251 M برو 2×2",
    price: 24.99,
    image: "/gan-251-m-pro-2x2-speedcube-magnetic-compact.jpg",
    description: "مكعب 2×2 متميز مع نظام تحديد مغناطيسي وقطع زوايا سلس",
    rating: 4.8,
    reviews: 345,
    type: "2x2",
  },
  {
    id: 11,
    name: "مويو ويبو WR M 2×2",
    price: 19.99,
    image: "/moyu-weipo-wr-m-2x2-speedcube-magnetic-world-recor.jpg",
    description: "نسخة الرقم القياسي العالمي 2×2 مع مغناطيس قابلة للتعديل وتصميم خفيف الوزن",
    rating: 4.7,
    reviews: 267,
    type: "2x2",
  },
  {
    id: 12,
    name: "كيوي MS 2×2",
    price: 14.99,
    image: "/qiyi-ms-2x2-speedcube-magnetic-budget-friendly.jpg",
    description: "مكعب 2×2 مغناطيسي اقتصادي مع أداء ممتاز للمبتدئين",
    rating: 4.6,
    reviews: 512,
    type: "2x2",
  },
  // 3x3 Cubes
  {
    id: 1,
    name: "جان 12 ماجليف 3×3",
    price: 64.99,
    image: "/gan-12-maglev-3x3-speedcube-flagship-blue-modern-p.jpg",
    description: "تقنية ماجليف الرائدة مع طلاء UV ومغناطيس الزوايا ونظام شد قابل للتعديل",
    rating: 4.9,
    reviews: 892,
    type: "3x3",
  },
  {
    id: 2,
    name: "مويو ويلونج WR M 2021",
    price: 49.99,
    image: "/moyu-weilong-wr-m-2021-speedcube-maglev-purple-pro.jpg",
    description: "نسخة الرقم القياسي العالمي مع نظام تعديل مزدوج وتقنية ماجليف الأساسية",
    rating: 4.8,
    reviews: 654,
    type: "3x3",
  },
  {
    id: 3,
    name: "كيوي تورنادو V3 بايونير",
    price: 39.99,
    image: "/qiyi-tornado-v3-pioneer-speedcube-stickerless-brig.jpg",
    description: "إصدار بايونير مع تعديل حركة المركز وإعداد مصنع متميز",
    rating: 4.7,
    reviews: 523,
    type: "3x3",
  },
  {
    id: 4,
    name: "جان 356 X V2",
    price: 54.99,
    image: "/gan-356-x-v2-speedcube-stickerless-adjustable-prod.jpg",
    description: "النموذج الرائد الكلاسيكي مع نواة IPG رقمية ومرونة قابلة للتعديل وقوة المغناطيس",
    rating: 4.8,
    reviews: 1247,
    type: "3x3",
  },
  {
    id: 5,
    name: "مويو RS3 M 2020",
    price: 24.99,
    image: "/moyu-rs3-m-2020-speedcube-budget-magnetic-bright-s.jpg",
    description: "نموذج رائد اقتصادي مع مغناطيس قوي ودوران سلس، مثالي للمبتدئين",
    rating: 4.9,
    reviews: 2156,
    type: "3x3",
  },
  {
    id: 6,
    name: "يوكسين ليتل ماجيك V2",
    price: 19.99,
    image: "/yuxin-little-magic-v2-speedcube-magnetic-colorful-.jpg",
    description: "إصدار V2 المحسّن مع تحديد مغناطيسي وقطع زوايا سلس كالزبدة",
    rating: 4.6,
    reviews: 1834,
    type: "3x3",
  },
  {
    id: 7,
    name: "جان 11 M برو",
    price: 59.99,
    image: "/gan-11-m-pro-speedcube-uv-coated-professional-stic.jpg",
    description: "درجة احترافية مع طلاء UV ناعم وصواميل GES قابلة للتعديل ومغناطيس الزوايا الأساسية",
    rating: 4.9,
    reviews: 978,
    type: "3x3",
  },
  {
    id: 8,
    name: "مويو ويلونج V9",
    price: 44.99,
    image: "/moyu-weilong-v9-speedcube-ball-core-uv-technology-.jpg",
    description: "أحدث إصدار V9 مع تقنية UV الكروية الثورية واستقرار محسّن",
    rating: 4.8,
    reviews: 445,
    type: "3x3",
  },
  {
    id: 9,
    name: "إكس مان تورنادو V2 M",
    price: 34.99,
    image: "/x-man-tornado-v2-m-speedcube-ridged-flagship-dual-.jpg",
    description: "مكعب سرعة بتصميم مضلع وتعديل مزدوج وأداء معدل من المصنع",
    rating: 4.7,
    reviews: 712,
    type: "3x3",
  },
  // 4x4 Cubes
  {
    id: 13,
    name: "مويو أوسو WR M 4×4",
    price: 44.99,
    image: "/moyu-aosu-wr-m-4x4-speedcube-world-record-magnetic.jpg",
    description: "مكعب 4×4 رقم قياسي عالمي مع نظام تعديل مزدوج واستقرار محسّن",
    rating: 4.9,
    reviews: 423,
    type: "4x4",
  },
  {
    id: 14,
    name: "جان 460 M 4×4",
    price: 54.99,
    image: "/gan-460-m-4x4-speedcube-magnetic-flagship.jpg",
    description: "مكعب 4×4 متميز مع تحديد مغناطيسي مميز من جان ودوران طبقات سلس",
    rating: 4.8,
    reviews: 289,
    type: "4x4",
  },
  {
    id: 15,
    name: "كيوي MS 4×4",
    price: 29.99,
    image: "/qiyi-ms-4x4-speedcube-magnetic-budget-performance.jpg",
    description: "مكعب 4×4 مغناطيسي اقتصادي مع آلية ممتازة مضادة للانفجار",
    rating: 4.7,
    reviews: 567,
    type: "4x4",
  },
  {
    id: 16,
    name: "YJ MGC 4×4",
    price: 34.99,
    image: "/yj-mgc-4x4-speedcube-magnetic-smooth-turning.jpg",
    description: "مكعب 4×4 بدوران سلس مع مغناطيس قابلة للتعديل وقطع زوايا ممتاز",
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
            <span className="text-xl font-bold tracking-tight">{"متجر المكعبات"}</span>
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
              {"تسوق مجموعتنا"}
            </h1>
            <p
              className="text-pretty text-lg text-muted-foreground"
              style={{ animation: "slide-up 0.6s ease-out 0.1s backwards" }}
            >
              {"اعثر على المكعب المثالي لمستوى مهارتك وأسلوبك"}
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
                {"جميع المكعبات"}
              </Button>
              <Button
                variant={selectedType === "2x2" ? "default" : "outline"}
                onClick={() => setSelectedType("2x2")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                {"2×2"}
              </Button>
              <Button
                variant={selectedType === "3x3" ? "default" : "outline"}
                onClick={() => setSelectedType("3x3")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                {"3×3"}
              </Button>
              <Button
                variant={selectedType === "4x4" ? "default" : "outline"}
                onClick={() => setSelectedType("4x4")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                {"4×4"}
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
                {"السعر: من الأقل إلى الأعلى"}
              </Button>
              <Button
                variant={sortOrder === "high-to-low" ? "default" : "outline"}
                onClick={() => setSortOrder(sortOrder === "high-to-low" ? "default" : "high-to-low")}
                className="cursor-pointer transition-all hover:scale-105"
              >
                <ArrowUpDown className="mr-2 h-4 w-4" />
                {"السعر: من الأعلى إلى الأقل"}
              </Button>
            </div>
          </div>

          {/* Product Count */}
          <div
            className="mb-6 text-sm text-muted-foreground"
            style={{ animation: "slide-up 0.6s ease-out 0.3s backwards" }}
          >
            {`عرض ${filteredProducts.length} ${filteredProducts.length === 1 ? "منتج" : "منتجات"}`}
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
              <p className="text-lg text-muted-foreground">{"لم يتم العثور على منتجات تطابق معاييرك"}</p>
            </div>
          )}
        </div>
      </div>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  )
}
