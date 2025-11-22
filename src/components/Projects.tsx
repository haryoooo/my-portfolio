import arrowRight from '../assets/icon/arrow-right.svg';
import { PortfolioData, Project } from "../types/portfolioType";

interface ProjectsProps {
  data: PortfolioData;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <div id="projects" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono">
        PROJECTS
      </h2>

      <div className="space-y-6">
        {data?.projects?.map((project: Project, index: number) => (
          <div
            key={project.id}
            data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex flex-row justify-between sm:flex-row sm:justify-between gap-5 mb-2">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  {project.title}
                </h3>
              </div>
              {project.url && (
                <div className="mt-2 tracking-wider group">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={arrowRight}
                      alt="arrow-right"
                      className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
              <span>{project.type || 'Personal'}</span>
              <span>·</span>
              <span>{project.year || '2025'}</span>
            </div>
            <p className="text-gray-700 my-2 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-gray-600 mt-5">
              <span className="font-semibold">Tech Stack : </span>
              {project.technology?.join(', ') || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
