import { PortfolioData, Certification as CertificationType } from "../types/portfolioType";

interface CertificationsProps {
  data?: PortfolioData;
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">CERTIFICATIONS</h2>

      <div className="space-y-4">
        {data?.certifications?.map((cert: CertificationType) => (
          <div key={`${cert.title}-${cert.year}`} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {cert.title}
              </h3>
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

