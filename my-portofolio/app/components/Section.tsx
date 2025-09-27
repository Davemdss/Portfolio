"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"
import TypingAnimation from "./TypingAnimation"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, onButtonClick }: SectionProps) {
  if (id === "skills") {
    return <SkillsSection isActive={isActive} />
  }

  if (id === "projects") {
    return <ProjectsSection isActive={isActive} />
  }

  if (id === "contact") {
    return <ContactSection isActive={isActive} />
  }

  if (id === "landing") {
    const greetings = ["Hi", "Halo", "Olá", "你好", "Bonjour", "Hola", "こんにちは", "안녕하세요", "Hallo", "नमस्ते"];

    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-6 sm:p-8 md:pl-16 lg:pl-24 md:pr-20 lg:pr-32">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TypingAnimation words={greetings} />, I'm Dave
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button
              onClick={onButtonClick}
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </section>
    );
  }

  // Default section layout for any other sections
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-6 sm:p-8 md:pl-16 lg:pl-24 md:pr-20 lg:pr-32">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            onClick={onButtonClick}
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}