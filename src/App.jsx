import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Process from "./components/Process"
import About from "./components/About"
import Principles from "./components/Principles"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
  >
    Skip to main content
  </a>

  <Navbar />

  <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <About />
        <Principles />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App