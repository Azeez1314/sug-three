import ContactHero from "@/app/components/contact/contact-hero"
import ContactForm from "@/app/components/contact/contact-form"

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <ContactHero />
      <ContactForm />
    </main>
  )
}
