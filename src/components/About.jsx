import joePhoto from "../assets/joe.jpg"

function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Founder Photo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-50" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <img
                src={joePhoto}
                alt="Joe, Founder of CoreDesk Business Solutions"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              About CoreDesk
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              The support behind the business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Small businesses often carry a lot of administrative and
              operational work behind the scenes. CoreDesk Business Solutions
              exists to help bring structure, visibility, and practical
              support to that work.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We work alongside business owners to understand how their
              operations currently work, identify areas that can be improved,
              and put practical systems and workflows in place.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-lg font-semibold text-slate-950">
                Joseph M. Njoroge
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Founder, CoreDesk Business Solutions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About