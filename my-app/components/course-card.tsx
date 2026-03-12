import { Clock, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  instructor: string
  category: string
  price: number
  rating: number
  students: number
  duration: string
  image: string
  featured?: boolean
}

export function CourseCard({
  title,
  instructor,
  category,
  price,
  rating,
  students,
  duration,
  image,
  featured = false,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-colors group">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-3 right-3">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground line-clamp-2 mb-2 text-balance">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">by {instructor}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-card-foreground font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-lg font-bold text-primary">${price}</span>
        <Button size="sm">Book Now</Button>
      </CardFooter>
    </Card>
  )
}
