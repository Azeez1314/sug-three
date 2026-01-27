export function AboutImpact() {
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center">
            Our Vision for a Community Hub
          </h2>
  
          <p className="mt-6 text-center text-lg text-gray-700 max-w-3xl mx-auto">
            We are working to secure a permanent home for prayer, education, and
            community support — a welcoming and inclusive space that brings people
            together across faiths, cultures, and generations.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Daily and weekly prayers and Islamic learning",
              "Open community lectures on wellbeing, ethics, and family life",
              "Youth development programmes focused on confidence and leadership",
              "Family support, pastoral care, and signposting to local services",
              "Volunteer-led outreach and charitable initiatives",
              "Interfaith and cross-community dialogue events",
              "Hybrid delivery of talks and classes (in-person + online)",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  