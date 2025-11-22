import { PortfolioData, Language } from "../types/portfolioType";

interface LanguagesProps {
  data?: PortfolioData;
}

export default function Languages({ data }: LanguagesProps) {
  return (
    <div data-aos="fade-up" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">LANGUAGES</h2>

      <div className="space-y-4">
        {data?.languages?.map((lang: Language) => (
          <div key={lang.name} className="flex items-center justify-between">
            <span className="text-lg text-black font-medium">{lang.name}</span>
            <span className="text-gray-600">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

