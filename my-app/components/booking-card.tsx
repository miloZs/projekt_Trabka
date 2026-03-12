import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BookingCardProps {
  title: string
  instructor: string
  date: string
  time: string
  location: string
  status: "upcoming" | "completed" | "cancelled"
  image: string
}

export function BookingCard({
  title,
  instructor,
  date,
  time,
  location,
  status,
  image,
}: BookingCardProps) {
  const statusStyles = {
    upcoming: "bg-primary/20 text-primary border-primary/30",
    completed: "bg-secondary text-secondary-foreground",
    cancelled: "bg-destructive/20 text-destructive",
  }

  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-48 h-32 sm:h-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-card-foreground line-clamp-1">
                  {title}
                </h3>
                <Badge variant="outline" className={statusStyles[status]}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">by {instructor}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              {status === "upcoming" && (
                <>
                  <Button size="sm">Join Session</Button>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </>
              )}
              {status === "completed" && (
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              )}
              {status === "cancelled" && (
                <Button size="sm">Book Again</Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
