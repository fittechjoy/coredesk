function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

        <div className="rounded-3xl bg-slate-100 px-8 py-16 text-center md:px-16 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Let's Talk
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Ready to get your back office organized?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Let's start with a conversation about how your business operates,
            what's creating friction, and where better systems and support
            could help.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:Njorogejm@outlook.com"
              className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Book a Consultation
            </a>

            <a
              href="#services"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900"
            >
              View Services
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact