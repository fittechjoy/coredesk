function Services() {
  const services = [
    {
      number: "01",
      title: "Back-Office Operations",
      description:
        "We help organize the day-to-day administrative work that keeps your business moving.",
    },
    {
      number: "02",
      title: "Workforce Support",
      description:
        "Support for employee records, workforce coordination, payroll preparation, and related administrative tasks.",
    },
    {
      number: "03",
      title: "Business Reporting",
      description:
        "Clear, practical reporting that gives business owners better visibility into their operations.",
    },
    {
      number: "04",
      title: "Administrative Systems",
      description:
        "We help establish practical workflows and systems that make recurring business tasks easier to manage.",
    },
    {
      number: "05",
      title: "Invoicing & Accounts Coordination",
      description:
        "Support with invoicing, payment tracking, and coordination of routine accounts-related processes.",
    },
    {
      number: "06",
      title: "Compliance & Document Tracking",
      description:
        "Keep important business documents, employee records, and compliance-related information organized and easier to track.",
    },
  ]

  return (
    <section id="services" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* Section Header */}
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Practical support for the work behind the work.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From administrative operations to workforce coordination and
            reporting, CoreDesk helps businesses bring structure to the
            functions that happen behind the scenes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-teal-600">
                  {service.number}
                </span>

                <span className="text-slate-300 transition duration-300 group-hover:text-slate-500">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services