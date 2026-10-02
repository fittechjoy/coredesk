function Principles() {
  const principles = [
    {
      number: "01",
      title: "Practical systems",
      description:
        "We focus on tools and workflows that are practical for the way your business actually operates.",
    },
    {
      number: "02",
      title: "Clear visibility",
      description:
        "Organized information and reporting make it easier for business owners to understand what is happening.",
    },
    {
      number: "03",
      title: "Flexible support",
      description:
        "Our support can adapt as your business grows, changes, and develops new operational needs.",
    },
    {
      number: "04",
      title: "Less administrative burden",
      description:
        "We help take recurring back-office work off your plate so you can spend more time on the business itself.",
    },
  ]

  return (
    <section className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Introduction */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
              Built Around Your Business
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Support that fits the way you work.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
              Every business has different processes, people, and priorities.
              Our approach is designed around your existing operations rather
              than forcing you into a one-size-fits-all system.
            </p>
          </div>

          {/* Principles */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="bg-slate-950 p-7 transition duration-300 hover:bg-slate-900"
              >
                <span className="text-sm font-semibold text-teal-400">
                  {principle.number}
                </span>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Principles