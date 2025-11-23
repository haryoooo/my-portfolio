import {
  PortfolioData,
  Certification as CertificationType,
} from '../types/portfolioType';
import arrowRight from '../assets/icon/arrow-right.svg';

interface CertificationsProps {
  data?: PortfolioData;
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className="border border-gray-200 -mx-4 px-4 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">
        CERTIFICATIONS
      </h2>

      <div className="space-y-[30px]">
        {data?.certifications?.map((cert: CertificationType, index: number) => (
          <div
            key={`${cert.title}-${cert.year}`}
            data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
            className="space-y-2"
          >
            <div className="flex flex-row justify-between sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-black">
                  {cert.title}
                </h3>
              </div>
              <div className="mt-2 tracking-wider group">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={arrowRight}
                    alt={cert.title}
                    className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
              <span>{cert.issuer}</span>
              <span>·</span>
              <span>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
