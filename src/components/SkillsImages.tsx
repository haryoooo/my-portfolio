import { useRef } from 'react';
import angular from '../assets/skills/angular.svg';
import framer from '../assets/skills/framer.svg';
import github from '../assets/skills/github.svg';
import next from '../assets/skills/next.svg';
import react from '../assets/skills/react.svg';
import tailwind from '../assets/skills/tailwind.svg';
import typescript from '../assets/skills/typescript.svg';
import vue from '../assets/skills/vue.svg';
import { motion } from 'framer-motion';

export default function SkillsImages() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Angular', image: angular },
    { name: 'Framer', image: framer },
    { name: 'GitHub', image: github },
    { name: 'Next.js', image: next },
    { name: 'React', image: react },
    { name: 'Tailwind CSS', image: tailwind },
    { name: 'TypeScript', image: typescript },
    { name: 'Vue', image: vue },
  ];

  return (
    <div data-aos="fade-left" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <div ref={constraintsRef} className="relative h-[120px]">
        <div className="flex flex-wrap gap-6 items-start">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              className="relative cursor-grab active:cursor-grabbing"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-12 w-auto md:h-16 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
