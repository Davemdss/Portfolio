"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

interface ContactSectionProps {
  isActive: boolean
}

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:dave30dec@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Davemdss" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dave-mandas-888495292/" },
]

export default function ContactSection({ isActive }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative h-screen w-full snap-start flex flex-col justify-center p-6 sm:p-8 md:p-16 lg:p-24"
    >
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mt-6 text-neutral-400"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ready to collaborate on your next project? I'd love to hear from you and discuss how we can work together.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <Button
              key={link.label}
              variant="outline"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white transition-colors"
              asChild
            >
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isActive ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {link.label}
              </motion.a>
            </Button>
          )
        })}
      </motion.div>

      <motion.div
        className="mt-12 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-2">Quick Contact</h3>
        <p className="text-neutral-400 text-sm mb-4">Drop me a line and I'll get back to you as soon as possible.</p>
        <Button className="w-full bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-black" asChild>
          <a href="mailto:dave30dec@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </a>
        </Button>
      </motion.div>
    </section>
  )
}