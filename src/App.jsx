function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            CORE<span className="font-light">desk</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900">
              Services
            </a>

            <a href="#process" className="text-sm text-slate-600 hover:text-slate-900">
              How It Works
            </a>

            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </a>

            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
                Back-Office Operations & Business Support
              </p>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl">
                The support
                <br />
                behind your business.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                We help small businesses organize the administrative and
                operational work behind the scenes, so owners can focus on
                running and growing their business.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Book a Back-Office Assessment
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-slate-300 px-7 py-3.5 text-center text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

       {/* Services */}
<section id="services" className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

    {/* Section heading */}
    <div className="grid gap-10 md:grid-cols-2 md:items-end">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          What we do
        </p>

        <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          The work behind the work.
        </h2>
      </div>

      <p className="max-w-lg text-base leading-7 text-slate-600 md:justify-self-end">
        From workforce administration to business reporting, CoreDesk helps
        organize the systems and processes that keep your business moving.
      </p>
    </div>

    {/* Services grid */}
    <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">

      {/* Service 01 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            01
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Back-Office Operations
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Organize recurring administrative work, workflows, approvals,
          processes, and day-to-day operational tasks.
        </p>
      </article>

      {/* Service 02 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            02
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Workforce Support
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Help manage employee information, scheduling, time tracking,
          timesheets, overtime, and payroll workflows.
        </p>
      </article>

      {/* Service 03 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            03
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Business Reporting
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Turn operational information into clear reports, workforce metrics,
          labor-cost visibility, and useful business summaries.
        </p>
      </article>

      {/* Service 04 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            04
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Administrative Systems
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Create organized workflows for documents, onboarding, approvals,
          recurring tasks, and information management.
        </p>
      </article>

      {/* Service 05 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            05
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Invoicing & Accounts Coordination
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Help track invoices, documentation, payment status, expenses, and
          coordination with the appropriate accounting professionals.
        </p>
      </article>

      {/* Service 06 */}
      <article className="group bg-white p-8 transition duration-300 hover:bg-slate-50 md:p-10">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-slate-400">
            06
          </span>

          <span className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
            ↗
          </span>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-slate-950">
          Compliance & Document Tracking
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Keep important employee and business records organized, track
          expirations, and create reminders for recurring requirements.
        </p>
      </article>

    </div>
  </div>
</section>
{/* How It Works */}
<section id="process" className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

    {/* Section heading */}
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
        How it works
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        A better way to manage the work behind your business.
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600">
        We start by understanding how your business works today, then build
        practical systems and processes around what you actually need.
      </p>
    </div>

    {/* Process */}
    <div className="mt-16 grid gap-0 border-t border-slate-300">

      {/* Step 01 */}
      <div className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          01
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Assess
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          We learn how your business currently operates, what tools you use,
          and where administrative work is creating friction.
        </p>
      </div>

      {/* Step 02 */}
      <div className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          02
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Identify
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          We identify repetitive tasks, gaps, bottlenecks, and areas where
          better organization can improve visibility and efficiency.
        </p>
      </div>

      {/* Step 03 */}
      <div className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          03
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Recommend
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          We recommend practical tools and workflows that fit your business
          rather than adding unnecessary complexity.
        </p>
      </div>

      {/* Step 04 */}
      <div className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          04
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Implement
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          We help put the selected systems, workflows, documentation, and
          processes into practice.
        </p>
      </div>

      {/* Step 05 */}
      <div className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          05
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Support
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          We provide ongoing back-office support to keep information,
          workflows, and administrative tasks organized.
        </p>
      </div>

      {/* Step 06 */}
      <div className="grid gap-6 py-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
        <span className="text-sm font-medium text-teal-600">
          06
        </span>

        <h3 className="text-xl font-semibold text-slate-950">
          Improve
        </h3>

        <p className="max-w-md text-sm leading-7 text-slate-600">
          As the business changes, we refine processes and systems so the
          back office continues to support the way the business operates.
        </p>
      </div>

    </div>
  </div>
</section>
      </main>
    </div>
  )
}

export default App