"use client"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Label } from "@/app/components/ui/label"

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
      <div className="grid gap-10 md:grid-cols-2">
        
        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Reach out for partnerships, volunteering, donations, or general enquiries.
          </p>

          <div className="space-y-4 text-sm">
            <p><strong>Email:</strong> info@womenpwr.org</p>
            <p><strong>Phone:</strong> +44 123 456 7890</p>
            <p><strong>Location:</strong> United Kingdom</p>
          </div>
        </div>

        {/* Form */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
