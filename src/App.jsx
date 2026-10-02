import joePhoto from "./assets/joe.jpg"
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
{/* About */}
<section id="about" className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

    <div className="grid gap-16 md:grid-cols-2 md:items-center">

      {/* Founder image */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={joePhoto}
            alt="Joe, Founder of CoreDesk Business Solutions"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
            CoreDesk
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            Business Operations & Support
          </p>
        </div>
      </div>

      {/* About content */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          About CoreDesk
        </p>

        <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          The right support, without building another department.
        </h2>

        <div className="mt-8 space-y-5 text-base leading-7 text-slate-600">
          <p>
            CoreDesk was created around a simple idea: small businesses
            shouldn't have to manage every administrative task on their own.
          </p>

          <p>
            We help business owners understand what's happening behind the
            scenes, organize their workflows, and put practical systems in
            place to keep the operation running smoothly.
          </p>

          <p>
            Rather than forcing every business into the same tools or
            processes, CoreDesk starts by understanding how the business
            actually works and then builds support around its needs.
          </p>
        </div>

        {/* Founder */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-lg font-semibold text-slate-950">
            Joseph M. Njoroge
          </p>

          <p className="mt-1 text-sm text-teal-600">
            Founder, CoreDesk Business Solutions
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Built Around Your Business */}
<section className="border-t border-slate-200 bg-slate-950 text-white">
  <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

    <div className="grid gap-16 md:grid-cols-2 md:items-end">

      {/* Heading */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
          Built around your business
        </p>

        <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Practical support. Clearer operations.
        </h2>
      </div>

      {/* Intro */}
      <p className="max-w-lg text-base leading-7 text-slate-300">
        Every business works differently. CoreDesk focuses on understanding
        your operation first, then putting the right systems and support
        around it.
      </p>
    </div>

    {/* Principles */}
    <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-2">

      {/* 01 */}
      <div className="bg-slate-950 p-8 md:p-10">
        <span className="text-sm font-medium text-teal-400">
          01
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Practical systems
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          We use tools and workflows that fit the way your business actually
          operates.
        </p>
      </div>

      {/* 02 */}
      <div className="bg-slate-950 p-8 md:p-10">
        <span className="text-sm font-medium text-teal-400">
          02
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Clear visibility
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          Organized information and reporting help you understand what's
          happening across the business.
        </p>
      </div>

      {/* 03 */}
      <div className="bg-slate-950 p-8 md:p-10">
        <span className="text-sm font-medium text-teal-400">
          03
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Flexible support
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          Support can adapt as your business changes, grows, and takes on new
          operational needs.
        </p>
      </div>

      {/* 04 */}
      <div className="bg-slate-950 p-8 md:p-10">
        <span className="text-sm font-medium text-teal-400">
          04
        </span>

        <h3 className="mt-8 text-xl font-semibold">
          Less administrative burden
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
          Keep the work behind the business organized so owners can spend more
          time focused on the business itself.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Contact CTA */}
<section id="contact" className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

    <div className="rounded-3xl bg-slate-100 px-8 py-16 text-center md:px-16 md:py-20">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
        Let's talk
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
        Ready to get your back office organized?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
        Let's start with a conversation about how your business operates,
        what's creating friction, and where better systems could help.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <a
          href="mailto:Njorogejm@outlook.com"
          className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Book a Consultation
        </a>

        <a
          href="#services"
          className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          View Services
        </a>

      </div>

    </div>
  </div>
</section>
      </main>
      {/* Footer */}
<footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-10">

    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

      <div>
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-slate-950"
        >
          CORE<span className="font-light">desk</span>
        </a>

        <p className="mt-2 text-sm text-slate-500">
          The support behind your business.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 text-sm text-slate-600">
        <a href="#services" className="hover:text-slate-950">
          Services
        </a>

        <a href="#process" className="hover:text-slate-950">
          How It Works
        </a>

        <a href="#about" className="hover:text-slate-950">
          About
        </a>

       <a
  href="#contact"
  className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-slate-700"
>
  Book a Consultation
</a>
      </div>

    </div>

    <div className="mt-8 border-t border-slate-200 pt-6">
      <p className="text-xs text-slate-400">
        © 2026 CoreDesk Business Solutions. All rights reserved.
      </p>
    </div>

  </div>
</footer>
    </div>
  )
}

export default App