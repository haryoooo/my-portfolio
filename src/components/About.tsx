import { PortfolioData } from '../types/portfolioType';

interface AboutProps {
  data?: PortfolioData;
}

const About = ({ data }: AboutProps) => {
  return (
    <div data-aos="fade-up">
      <div className="border border-gray-200 -mx-4 px-4 md:mx-0 md:px-6 py-8 md:py-12">
        <h2 className="text-lg md:text-xl font-medium text-black mb-4 font-mono tracking-wider">
          ABOUT
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {data?.description ||
            "I'm Frontend engineer with 3+ years of experience across diverse industries including Health and wellness, IT Consultant, Finance, and Transportation. Currently working on Bluebird Group as Frontend Engineer. I specialize in creating interactive user interfaces, translate requirement of business into an apps and optimizing performance of applications"}
        </p>
      </div>
    </div>
  );
};

export default About;
