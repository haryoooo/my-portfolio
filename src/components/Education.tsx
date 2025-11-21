import { PortfolioData, Education as EducationType } from "../types/portfolioType";

interface EducationProps {
  data?: PortfolioData;
}

export default function Education({ data }: EducationProps) {
  return (
    <div className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">EDUCATION</h2>

      <div className="space-y-6">
        {data?.education?.map((edu: EducationType) => (
          <div key={`${edu.degree}-${edu.period}`} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                {edu.degree}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
                <span>{edu.university}</span>
                <span>·</span>
                <span>{edu.period}</span>
              </div>
            {edu.description && (
              <p className="text-gray-700 leading-relaxed mt-2">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

