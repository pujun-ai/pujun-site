'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Pujun B.</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#photos">Photos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
