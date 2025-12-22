import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Eye, MessageSquare, Heart } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Female Robotics Team Wins Major Award",
    image: "/01-sug3.webp",
    views: 0,
    comments: 0,
    likes: 7,
  },
  {
    id: 2,
    title: "Women Overtake Men in College Degrees",
    image: "/02-sug3.webp",
    views: 0,
    comments: 0,
    likes: 8,
  },
  {
    id: 3,
    title: "Countries with the Best Parental Leave Policies",
    image: "/03-sug3.jpg",
    views: 0,
    comments: 0,
    likes: 2,
  },
]

export default function LatestNews() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          Latest News
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
              </CardContent>

              <CardFooter className="flex items-center justify-between border-t px-6 py-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {item.comments}
                  </span>
                </div>

                <span className="flex items-center gap-1 text-rose-500">
                  <Heart className="h-4 w-4" />
                  {item.likes}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button size="lg" className="rounded-none px-10">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
