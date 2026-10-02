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
      <Navbar />

      <main>
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