import { Badge } from "../ui/badge"

export const sections = [
  {
    id: "landing",
    subtitle: (
      <Badge variant="outline" className="text-white border-white">
        Portfolio
      </Badge>
    ),
    title: "Hi, I'm Dave",
    content: "Full-Stack Developer & Creative Problem Solver",
    showButton: true,
    buttonText: "View My Work",
  },
  {
    id: "about",
    title: "About Me",
    content: "Hi, I'm Dave, a passionate developer and a fifth-semester student at BINUS University. My learning philosophy is a belief in diligent work. I'm convinced that the most complete solutions are the product of sustained effort and a genuine passion for building things consistently. With this philosophy, I'm dedicated to creating software that is clean, efficient, and makes a real impact.",
  },
  {
    id: "skills",
    title: "Skills & Technologies",
    content:
      "Proficient in React, Next.js, TypeScript, Node.js, and modern development tools. Always learning and adapting to new technologies.",
  },
  {
    id: "projects",
    title: "Featured Projects",
    content: "A collection of my best work showcasing different technologies and problem-solving approaches.",
  },
  {
    id: "contact",
    title: "Let's Connect",
    content:
      "Ready to collaborate on your next project? I'd love to hear from you and discuss how we can work together.",
    showButton: true,
    buttonText: "Get In Touch",
  },
]
