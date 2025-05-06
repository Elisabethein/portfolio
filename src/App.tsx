import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="stack"><Stack /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
