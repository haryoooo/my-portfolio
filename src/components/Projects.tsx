interface Project {
  id: string | number;
  description: string;
  technology: string[];
  title: string;
  url: string;
  type?: string;
  year?: string;
}

interface ProjectsProps {
  data: {
    projects: Project[];
  };
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wider">
        PROJECTS
      </h2>

      <div className="space-y-6">
        {data?.projects?.map((project) => (
          <div
            key={project.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
              <span>{project.type || 'Personal'}</span>
              <span>·</span>
              <span>{project.year || '2025'}</span>
            </div>
            <p className="text-gray-700 my-2 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Tech Stack : </span>
              {project.technology?.join(', ') || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
