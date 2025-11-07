import { Cable as Cube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
                <Cube className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">متجر المكعبات</span>
            </div>
            <p className="text-pretty text-sm text-muted-foreground">
              وجهتك النهائية لمكعبات السرعة والألغاز عالية الجودة. نحن نقدم أفضل المنتجات من العلامات التجارية الرائدة في العالم.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">المنتجات</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">من نحن</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">اتصل بنا</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">الدعم</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">الشحن</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">المرتجعات</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">الشروط والأحكام</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 متجر المكعبات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
