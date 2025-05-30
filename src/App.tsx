import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import SparkleBackground from './components/SparkleBackground'
import SocialSidebar from './components/Sidebar'

function App() {

  return (
    <>
      <SparkleBackground />
      <SocialSidebar />
      
      <div className="w-full ml-7">
        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>

      <main className='w-full min-h-screen bg-[#060606] flex justify-center items-center cursor-default'>
      <div className="max-w-[90%] w-full ml-14">
        <section id="hero" className='scroll-mt-40'><Hero /></section>
        <section id="about" className='scroll-mt-20'><About /></section>
        <section id="stack" className='scroll-mt-20'><Stack /></section>
        <section id="projects" className='scroll-mt-20'><Projects /></section>
        <section id="resume" className='scroll-mt-20'><Resume /></section>
        <section id="contact" className='scroll-mt-40'><Contact /></section>
        </div>
      </main>

      <div className="w-full flex justify-center">
        <div className="max-w-[90%] w-full ml-14">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
