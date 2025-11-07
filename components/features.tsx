import { Truck, Shield, Headphones, Zap } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "شحن سريع",
    description: "توصيل مجاني للطلبات فوق $50",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "جميع المنتجات أصلية 100%",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "نحن هنا لمساعدتك في أي وقت",
  },
  {
    icon: Zap,
    title: "أداء رائد",
    description: "أفضل مكعبات السرعة من العلامات التجارية الكبرى",
  },
]

export function Features() {
  return (
    <section className="border-y bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-pretty text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
