import angular from "../assets/skills/angular.svg";
import framer from "../assets/skills/framer.svg";
import github from "../assets/skills/github.svg";
import next from "../assets/skills/next.svg";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import typescript from "../assets/skills/typescript.svg";
import vue from "../assets/skills/vue.svg";

export default function SkillsImages() {
  const skills = [
    { name: "Angular", image: angular },
    { name: "Framer", image: framer },
    { name: "GitHub", image: github },
    { name: "Next.js", image: next },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwind },
    { name: "TypeScript", image: typescript },
    { name: "Vue", image: vue },
  ];

  return (
    <div className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <div className="flex flex-wrap gap-6 items-start">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.image}
            alt={skill.name}
            className="h-12 w-auto md:h-16"
          />
        ))}
      </div>
    </div>
  );
}

