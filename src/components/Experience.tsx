import bluebird from "../assets/company/bluebird.png";
import doo from "../assets/company/doo.png";
import dtn from "../assets/company/dtn.png";
import mandala from "../assets/company/mandala.jpg";
import { PortfolioData, Experience as ExperienceType } from "../types/portfolioType";

interface ExperienceProps {
  data: PortfolioData;
}

export default function Experience({ data }: ExperienceProps) {
  const icon = {
    bluebird: bluebird,
    doo: doo,
    dtn: dtn,
    mandala: mandala,
  }

  return (
    <div id="experience" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">EXPERIENCE</h2>

      <div className="space-y-8">
        {[...(data?.experience || [])].reverse()?.map((el: ExperienceType, index: number) => (
          <div key={index} data-aos="fade-up" className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div className="flex items-start gap-3">
                {el.icon && (
                  <img 
                    src={icon?.[el.icon as keyof typeof icon]} 
                    alt={el.company || "Company logo"} 
                    className={`md:w-12 md:h-12 flex-shrink-0 object-contain ${index > 1 ? "w-10 h-10 md:w-12 md:h-12" : "w-9 h-9 md:w-9 md:h-9"}`}
                  />
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">
                    {el.title || data?.occupation || "Frontend Engineer"}
                  </h3>
                  <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
                    <span className="uppercase">{el.company}</span>
                    <span>·</span>
                    <span>{el.period}</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-[#7d7d7d] ml-[52px]">
              {el.description.split("\n").map((line: string, idx: number) => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith("-") || trimmedLine.startsWith("*")) {
                  return (
                    <li key={idx} className="list-disc list-inside">
                      {trimmedLine.substring(1).trim()}
                    </li>
                  );
                }
                return trimmedLine ? (
                  <li key={idx} className="list-disc list-inside">
                    {trimmedLine}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
