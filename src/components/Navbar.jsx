import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-slate-950"
            onClick={() => setMenuOpen(false)}
          >
            CORE<span className="font-light">desk</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl text-slate-900 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <span>×</span> : <span>☰</span>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Services
              </a>

              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                How It Works
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-slate-900 px-3 py-3 text-center text-sm font-medium text-white"
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar