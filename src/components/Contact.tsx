import { PortfolioData } from "../types/portfolioType";

interface ContactProps {
  data?: PortfolioData;
}

export default function Contact({ data }: ContactProps) {
  return (
    <div id="contact" data-aos="fade-up" className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
      <h2 className="text-lg md:text-xl font-medium text-black mb-6 md:mb-8 font-mono tracking-wider">CONTACT</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">Email</span>
          <a
            href={`mailto:${data?.email}`}
            className="block text-black hover:underline mt-1"
          >
            {data?.email}
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">LinkedIn</span>
          <a
            href={data?.url_linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:underline mt-1"
          >
            {data?.url_linkedin}
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">Github</span>
          <a
            href={data?.url_github}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:underline mt-1"
          >
            {data?.url_github}
          </a>
        </div>
      </div>
    </div>
  );
}
