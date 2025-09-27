'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './constants/sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const handleViewWorkClick = () => {
    const projectsIndex = sections.findIndex(section => section.id === 'projects');
    if (projectsIndex !== -1) {
      handleNavClick(projectsIndex);
    }
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex-col justify-center z-30 p-4 hidden md:flex">
        {sections.map((section, index) => (
          <div key={section.id} className="my-2 flex items-center justify-end">
            <button
              onClick={() => handleNavClick(index)}
              className={`
                group flex items-center justify-center rounded-full
                transition-all duration-300 ease-in-out
                ${
                  index === activeSection
                    ? 'w-4 h-4 bg-white hover:w-36 hover:h-6'
                    : 'w-3 h-3 bg-gray-600 hover:w-36 hover:h-6 hover:bg-gray-400'
                }
              `}
            >
              <span className="text-xs text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {capitalize(section.id)}
              </span>
            </button>
          </div>
        ))}
      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
            onButtonClick={section.id === 'landing' ? handleViewWorkClick : undefined}
          />
        ))}
      </div>
    </Layout>
  )
}