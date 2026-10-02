function Process() {
  const steps = [
    {
      number: "01",
      title: "Assess",
      description:
        "We understand how your business currently operates and identify the areas that need support.",
    },
    {
      number: "02",
      title: "Identify",
      description:
        "We identify administrative gaps, recurring tasks, and operational bottlenecks.",
    },
    {
      number: "03",
      title: "Recommend",
      description:
        "We recommend practical tools, workflows, and processes suited to your business.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "We help put the agreed systems and workflows into place.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "We provide ongoing back-office support so your systems continue working in practice.",
    },
    {
      number: "06",
      title: "Improve",
      description:
        "As your business changes, we review and refine the way your back-office operations work.",
    },
  ]

  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              A practical approach to better operations.
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We work with your business to understand what is happening
              behind the scenes, introduce practical systems, and provide
              ongoing support as your needs evolve.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid gap-5 py-7 transition duration-300 hover:bg-white md:grid-cols-[100px_220px_1fr] md:items-start md:px-5"
            >
              <span className="text-sm font-semibold text-teal-600">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process