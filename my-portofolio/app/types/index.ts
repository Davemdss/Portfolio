import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  skills?: string[]
  projects?: Project[]
}

export interface SectionProps extends Section {
  isActive: boolean
  onButtonClick?: () => void; // Add this line
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
}