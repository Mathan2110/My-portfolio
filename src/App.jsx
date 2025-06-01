import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project"
import Contact from "./components/contact/contact"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
