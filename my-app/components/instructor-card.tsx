import { Star, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface InstructorCardProps {
  name: string
  specialty: string
  avatar: string
  rating: number
  students: number
  courses: number
}

export function InstructorCard({
  name,
  specialty,
  avatar,
  rating,
  students,
  courses,
}: InstructorCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-lg bg-secondary text-secondary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-card-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{specialty}</p>
          <div className="flex items-center justify-center gap-4 text-sm mb-4 w-full">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-card-foreground font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-4">{courses} courses</p>
          <Button variant="outline" size="sm" className="w-full">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
