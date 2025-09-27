"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

type Skill = {
  name: string;
  years: number;
  mastery: number;
};

type SkillGroup = {
  category: string;
  items: Skill[];
};

interface SkillsDetailModalProps {
  onClose: () => void;
  skills: SkillGroup[];
  pieChartData: { name: string; value: number }[];
  COLORS: string[];
}

const ProgressBar = ({ mastery }: { mastery: number }) => (
  <div className="w-full bg-neutral-700 rounded-full h-2.5">
    <motion.div
      className="bg-[#FF4D00] h-2.5 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${mastery}%` }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
);

const AnimatedPieLabel = ({ cx, cy, midAngle, outerRadius, name, value, index, COLORS }: any) => {
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
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {`${name} ${value}%`}
    </motion.text>
  );
};

export default function SkillsDetailModal({ onClose, skills, pieChartData, COLORS }: SkillsDetailModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}

        className="relative bg-neutral-900/80 border border-neutral-700 rounded-xl w-full max-w-2xl max-h-[90vh] p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10">
          <X size={24} />
        </button>
        
        
        <div className="overflow-y-auto pr-4 -mr-4 hide-scrollbar">
          
          
          <div className="flex flex-col items-center justify-center mb-8 flex-shrink-0">
            <h3 className="text-2xl font-semibold mb-4 text-center">Skill Distribution</h3>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={<AnimatedPieLabel COLORS={COLORS} />}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

         
          <div className="flex flex-col gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-2xl font-semibold text-[#FF4D00] mb-4">{group.category}</h3>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium text-neutral-200">{skill.name}</span>
                        <span className="text-sm text-neutral-400">{skill.years} Year{skill.years > 1 ? 's' : ''}</span>
                      </div>
                      <ProgressBar mastery={skill.mastery} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}