import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  count: number
  icon: LucideIcon
}

export function CategoryCard({ name, count, icon: Icon }: CategoryCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-semibold text-card-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{count} courses</p>
      </CardContent>
    </Card>
  )
}
