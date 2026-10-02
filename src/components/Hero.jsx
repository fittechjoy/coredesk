function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Hero Text */}
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Back-Office Operations & Business Support
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              The support
              <br />
              behind your business.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We help small businesses organize the administrative and
              operational work behind the scenes, so owners can focus on
              running and growing their business.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Book a Back-Office Assessment
              </a>

              <a
                href="#services"
                className="rounded-full border border-slate-300 px-6 py-3.5 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Operations Visual */}
          <div className="animate-fade-in relative mx-auto w-full max-w-xl lg:ml-auto">

            <div className="absolute -inset-6 rounded-[2rem] bg-slate-50" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)] md:p-6">

              {/* Panel Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Operations
                  </p>

                  <p className="mt-1 text-lg font-semibold text-slate-950">
                    Business Overview
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-teal-500" />
                  <span className="text-xs font-medium text-teal-700">
                    Organized
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Workforce
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Organized
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Reporting
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Clear
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Workflows
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Connected
                  </p>
                </div>

              </div>

              {/* Workflow Section */}
              <div className="mt-5 rounded-2xl border border-slate-200 p-5">

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Back-office workflow
                  </p>

                  <p className="text-xs text-slate-400">
                    Support
                  </p>
                </div>

                <div className="mt-5 space-y-4">

                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">
                        Administration
                      </span>
                      <span className="font-medium text-slate-700">
                        Organized
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[88%] rounded-full bg-slate-900" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">
                        Workforce
                      </span>
                      <span className="font-medium text-slate-700">
                        Tracked
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[76%] rounded-full bg-teal-500" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">
                        Reporting
                      </span>
                      <span className="font-medium text-slate-700">
                        Visible
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[92%] rounded-full bg-slate-900" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Banner */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-950 px-5 py-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Back-office support
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Built around your business
                  </p>
                </div>

                <div className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              </div>

            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-5 -right-4 hidden rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                CoreDesk
              </p>

              <p className="mt-1 text-xs font-medium text-slate-900">
                The support behind the business
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero