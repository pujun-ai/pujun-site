import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Now from './components/Now'
import Photos from './components/Photos'
import Footer from './components/Footer'
import FloatingPetals from './components/FloatingPetals'

export default function Home() {
  return (
    <>
      <FloatingPetals />
      <Nav />
      <Hero />
      <About />
      <Now />
      <Experience />
      <Photos />
      <Footer />
    </>
  )
}
