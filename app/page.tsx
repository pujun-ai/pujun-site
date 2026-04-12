import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Now from './components/Now'
import Photos from './components/Photos'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
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
