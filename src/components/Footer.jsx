function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
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

          {/* Footer Navigation */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#services"
              className="text-sm text-slate-500 transition hover:text-slate-900"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm text-slate-500 transition hover:text-slate-900"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-sm text-slate-500 transition hover:text-slate-900"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-900 transition hover:text-teal-600"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-400">
            © 2026 CoreDesk Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer