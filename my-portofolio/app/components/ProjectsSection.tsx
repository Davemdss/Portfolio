"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface ProjectsSectionProps {
  isActive: boolean
}

const projects = [
  {
    id: "project-1",
    title: "PlanIt",
    description: "Full-stack Planning Management app, integrated with Artificial Intelligence",
    technologies: ["React", "JavaScript", "Figma", "PostgreSQL", "Git"],
    githubUrl: "https://github.com/Davemdss/PlanIT",
    insight: "Learned about Prototyping, UI/UX, AI integration, and version control."
  },
  {
    id: "project-2",
    title: "Lord Card Shop",
    description: "Model, View, Controller integrated Card Shop, along with an admin panel",
    technologies: ["C#", "ASP.NET"],
    githubUrl: "https://github.com/Davemdss/Lord-Card-Shop",
    insight: "Learned Model-View-Controller architecture and server-side logic with C#."
  },
  {
    id: "project-3",
    title: "CateriNgz",
    description: "Responsive catering promotional website featuring carousel design",
    technologies: ["Html", "CSS", "JS"],
    githubUrl: "https://github.com/Davemdss/CateriNgz",
    insight: "Created a foundation for HTML,CSS, JS understanding"
  },
  {
    id: "project-4",
    title: "Code Refactoring",
    description: "Refactored a Gym Management System on Java with over 2000 lines",
    technologies: ["Java"],
    githubUrl: "https://github.com/Davemdss/Gym-Management-System-Refactoring",
    insight: "Improve code quality, readability, and performance on a large Java App"
  },
  {
    id: "project-5",
    title: "Waste Classification AI",
    description: "AI to classify types of waste from images with machine learning integrated to a website",
    technologies: ["Python", "Flask", "Kaggle", "HTML", "CSS", "PyTorch"],
    githubUrl: "https://github.com/Davemdss/Waste-Classification-AI",
    insight: "Learned machine learning lifecycle, from data processing to model deployment "
  },
]


export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-8 w-full max-w-screen-xl mx-auto items-start">
        
        <motion.h2
          className="xl:col-span-12 text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="xl:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 hover:border-[#FF4D00]/50 transition-colors h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-neutral-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => ( <span key={tech} className="px-2 py-1 bg-neutral-800 text-xs rounded-md text-neutral-300">{tech}</span> ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-auto pt-4">
                  <Button variant="outline" size="sm" className="text-[#FF4D00] border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white bg-transparent transition-colors" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"> <Github className="w-4 h-4 mr-2" /> Code </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="hidden xl:block xl:col-span-4"
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 h-full flex flex-col hover:border-[#FF4D00]/50 transition-colors">
            <h3 className="text-2xl font-semibold text-[#FF4D00] mb-4">Completed Projects</h3>
            <p className="text-5xl font-bold mb-8">8+</p>
            <h3 className="text-2xl font-semibold text-[#FF4D00] mb-6">Key Insights</h3>
            <div className="flex-1 space-y-4 text-sm overflow-y-auto pr-2 -mr-2 hide-scrollbar min-h-0">
              {projects.map((project) => (
                <div key={project.id}>
                  <h4 className="font-semibold text-neutral-200 mb-1">{project.title}</h4>
                  <p className="text-neutral-400">
                    {project.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}