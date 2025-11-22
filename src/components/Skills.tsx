import { PortfolioData, Skill } from "../types/portfolioType";

interface SkillsProps {
  data?: PortfolioData;
}

export default function Skills({ data }: SkillsProps) {
  return (
    <div id="skills" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">SKILLS / STACK</h2>

      <div className="flex flex-wrap gap-3">
        {data?.skills?.map((skill: Skill, index: number) => (
          <span
            data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
            key={skill.name}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm md:text-base"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
