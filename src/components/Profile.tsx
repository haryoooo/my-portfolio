import HeaderImage from '../assets/haryo-img.jpg';
import {
  PortfolioData,
  Experience as ExperienceType,
} from '../types/portfolioType';

interface ProfileProps {
  data?: PortfolioData;
}

export default function Profile({ data }: ProfileProps) {
  // Get the most recent experience (first in reversed array, or last in original)
  const currentExperience: ExperienceType | null =
    data?.experience && data.experience.length > 0
      ? data.experience[data.experience.length - 1]
      : null;

  return (
    <div id="home" data-aos="fade-left">
      <div className="border border-gray-200 -mx-5 px-5 md:mx-0 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={HeaderImage}
              alt={data?.name || 'Profile'}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {data?.name || 'Haryo Novianto'}
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600">
              {data?.occupation || 'Frontend Engineer'} at{' '}
              {currentExperience?.company || 'Bluebird Group'}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
