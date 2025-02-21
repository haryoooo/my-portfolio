import ProjectImg from "../assets/projects.png";
import Redirect from "../assets/icon/export.png";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faAngular,
  faSass,
  faCss,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

interface Project {
  id: string | number;
  description: string;
  technology: string[]; // Ensure it's an array
  title: string;
  url: string;
}

interface ProjectsProps {
  data: {
    projects: Project[];
    tooltip_projects?: string;
  };
}

export default function Projects({ data }: ProjectsProps) {
  const techStackIcon: Record<string, any> = {
    vue: faVuejs,
    angular: faAngular,
    sass: faSass,
    css: faCss,
    react: faReact,
  };

  return (
    <div className="w-full bg-black min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h1 className="text-3xl text-white font-medium mb-16 text-center">
          My <span className="font-bold">Projects</span>
        </h1>

        <div className="space-y-24 lg:space-y-32">
          {data?.projects?.map((project, idx) => (
            <div
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-anchor-placement="top-bottom"
              key={project.id}
              className="group"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={ProjectImg}
                    alt={project.title}
                    className="w-full rounded-lg shadow-xl object-cover"
                  />
                </div>

                <div className="w-full text-start lg:w-1/2 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl lg:text-5xl font-bold text-white">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl text-white font-bold pt-2">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-start gap-5">
                    {project.technology.map((tech) => (
                      <FontAwesomeIcon style={{ color: "#9CA3AF" }} key={tech} icon={techStackIcon[tech]} />
                    ))}
                  </div>

                  <div>
                    <Tooltip anchorSelect="#my-anchor-element" place="top-end">
                      {data?.tooltip_projects}
                    </Tooltip>
                    <a
                      id="my-anchor-element"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer hover:scale-110"
                      aria-label="View project details"
                    >
                      <img src={Redirect} alt={project.title} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
