"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import SkillsDetailModal from "./SkillsDetails"

interface SkillsSectionProps {
  isActive: boolean
}

const skills = [
  { category: "Frontend", items: [ { name: "React", years: 2, mastery: 80 }, { name: "Next.js", years: 1, mastery: 70 }, { name: "TypeScript", years: 1, mastery: 70 }, { name: "Tailwind CSS", years: 1, mastery: 75 }, { name: "Javascript", years: 1, mastery: 70 }, { name: "HTML", years: 1, mastery: 70 }, { name: "CSS", years: 1, mastery: 70 }, ]},
  { category: "Backend", items: [ { name: "Node.js", years: 1, mastery: 65 }, { name: "C#", years: 1, mastery: 85 }, { name: "PostgreSQL", years: 1, mastery: 65 }, { name: "Java", years: 2, mastery: 85 }, { name: "C", years: 2, mastery: 85 }, { name: "python", years: 1, mastery: 70 }, ]},
  { category: "Tools", items: [ { name: "GitHub", years: 1, mastery: 60 }, { name: "VScode", years: 2, mastery: 85 }, { name: "Vercel", years: 1, mastery: 70 }, { name: "Canva", years: 3, mastery: 90 }, { name: "Figma", years: 2, mastery: 85 }, { name: "Eclipse", years: 2, mastery: 80 }, ]},
];

const pieChartData = [
  { name: "Frontend", value: 30 },
  { name: "Backend", value: 35 },
  { name: "Tools", value: 35 },
]
const COLORS = ["#FF4D00", "#A3A3A3", "#525252"];
const softSkills = ["Effective Communication", "Problem Solving", "Team Collaboration", "Project Management", "Adaptability"]

interface AnimatedPieLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  name?: string;
  value?: number;
  index?: number;
}

const AnimatedPieLabel = ({ cx, cy, midAngle, outerRadius, name, value, index }: AnimatedPieLabelProps) => {
  if (cx === undefined || cy === undefined || midAngle === undefined || outerRadius === undefined || name === undefined || value === undefined || index === undefined) {
    return null;
  }

  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <motion.text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {`${name} ${value}%`}
    </motion.text>
  );
};

export default function SkillsSection({ isActive }: SkillsSectionProps) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <>
      <section
        id="skills"
        className="relative h-screen w-full snap-start flex items-center justify-center p-8 md:p-16 lg:p-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center max-w-7xl w-full">
          <motion.div className="flex flex-col gap-8 w-full" initial={{ opacity: 0, x: -30 }} animate={isActive ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight">
              Technical Skills
            </h2>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-semibold text-[#FF4D00] mb-3">{skillGroup.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => ( <li key={skill.name} className="px-3 py-1.5 bg-neutral-800/60 border border-neutral-700 rounded-md text-neutral-300 text-sm">{skill.name}</li> ))}
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div className="flex flex-col gap-8 w-full" initial={{ opacity: 0, x: 30 }} animate={isActive ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Skill Distribution</h3>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={<AnimatedPieLabel />}>
                      {pieChartData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center">
                <Button onClick={() => setIsDetailsVisible(true)} variant="outline" className="text-[#FF4D00] border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white">
                  View Details
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FF4D00] mb-3">Soft Skills</h3>
              <ul className="space-y-2">
                {softSkills.map((skill) => ( <li key={skill} className="text-neutral-400 pl-4 border-l-2 border-neutral-700">{skill}</li> ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isDetailsVisible && (
          <SkillsDetailModal
            onClose={() => setIsDetailsVisible(false)}
            skills={skills}
            pieChartData={pieChartData}
            COLORS={COLORS}
          />
        )}
      </AnimatePresence>
    </>
  )
}
