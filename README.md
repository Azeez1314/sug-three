# Sheffield Usrah Group — Community Hub Website

A modern, responsive website for **Sheffield Usrah Group**, a volunteer‑led grassroots UK charity serving faith, families, and the wider Sheffield community.

Built with **Next.js (App Router)**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**, the site is CMS‑ready, accessible, and designed to support community engagement and urgent fundraising.

---

## 🌟 Project Purpose

This website provides:

* A welcoming digital home for Sheffield Usrah Group
* Clear information about the charity’s mission and impact
* A donor‑ready fundraising narrative
* A foundation for long‑term growth (events, donations, CMS, media)

It aligns with the charity’s vision to create a **permanent, inclusive community hub** rooted in faith, compassion, and service.

---

## 🧩 Tech Stack

* **Next.js 14+ (App Router)** — React framework
* **TypeScript** — Type safety
* **Tailwind CSS** — Utility‑first styling
* **shadcn/ui** — Accessible UI components
* **Framer Motion** — Animations & transitions
* **Lucide Icons** — Icon system

---

## ✨ Features

* Responsive, mobile‑first layout
* Brand color system (centralized tokens)
* Animated hero sections
* CMS‑ready navigation & footer
* Mobile hamburger menu (Sheet)
* Faith‑sensitive, inclusive content
* Donor‑ready fundraising narrative

---

## 🗂️ Routes

| Route           | Description                                              |
| --------------- | -------------------------------------------------------- |
| `/`             | Homepage with hero, mission CTAs, and news flow          |
| `/about`        | About Sheffield Usrah Group, vision, impact, and urgency |
| `/events`       | (Planned) Community events & registration                |
| `/news`         | (Planned) Updates & announcements                        |
| `/donate`       | (Planned) Donations & fundraising                        |
| `/get-involved` | (Planned) Volunteering & participation                   |

---

## 🧠 CMS‑Ready Configuration

Navigation and footer links are driven from a single config file:

`lib/site-config.ts`

```ts
export const siteConfig = {
  name: "Sheffield Usrah",
  nav: [
    { label: "About", href: "/about" },
    { label: "Support Us", href: "/support-us" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    explore: [...],
    support: [...],
    legal: [...],
  },
}
```

This can later be replaced with **Sanity**, **Strapi**, or **Payload CMS** without touching components.

---

## 🎨 Brand Colors

Defined centrally in `tailwind.config.ts`:

```ts
colors: {
  brand: {
    black: "#000000",
    rose: "#C94B6A",
    blue: "#2F73D8",
    indigo: "#243E8B",
    gray: "#6B7280",
  },
},
```

Usage:

```tsx
className="bg-brand-rose text-white"
```

---

## 📁 Key Components

| Component      | Purpose                               |
| -------------- | ------------------------------------- |
| `SiteNavbar`   | Responsive navbar with hamburger menu |
| `Hero`         | Homepage hero with animated text      |
| `AboutHero`    | About page hero section               |
| `AboutMission` | Mission & identity section            |
| `AboutImpact`  | Vision + community hub impact         |
| `AboutUrgency` | Fundraising urgency narrative         |
| `AboutCTA`     | Donor call‑to‑action                  |
| `SiteFooter`   | CMS‑driven footer                     |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Run the dev server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build for production

```bash
npm run build
npm start
```

---

## 🌐 Environment Variables

*(Optional for future integrations)*

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🛠️ Customization

### Change site name

`lib/site-config.ts`

```ts
name: "Sheffield Usrah Group",
```

---

### Replace hero images

Place files in:

```
/public/hero.jpg
/public/about-hero.jpg
```

---

### Update navigation or footer links

Edit:

```
lib/site-config.ts
```

---

## 🧪 Future Enhancements

* Stripe or PayPal donations
* Sanity / Strapi CMS
* Fundraising progress bar
* Event registration
* Podcast feed
* News CMS
* Multi‑language support

---

## 🕌 Faith‑Sensitive Design Principles

This project follows:

* Inclusive, respectful tone
* Faith‑rooted but open community language
* Accessibility (WCAG‑friendly structure)
* Non‑exploitative fundraising narrative

---

## 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/your-feature
npm run lint
npm run build
```

Open a PR with a clear description.

---

## 📜 License

MIT License

---

## 🙏 Acknowledgements

Built to support the mission of **Sheffield Usrah Group**:

> Educating & Empowering the Ummah while serving the wider Sheffield community.

---

## 📞 Contact

Sheffield Usrah Group
Email: [sheffieldusrahgroup@gmail.com](mailto:sheffieldusrahgroup@gmail.com)
Charity No: 1212902

---

*Jazakumullahu khayran — Thank you for supporting faith‑inspired community service.*
