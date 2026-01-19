import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

type EventCardProps = {
  title: string
  date: string
  location: string
  image: string
}

export default function EventCard({
  title,
  date,
  location,
  image,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-3 p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
        <p className="text-sm text-muted-foreground">{location}</p>

        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
