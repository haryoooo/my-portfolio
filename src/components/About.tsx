import { TypeAnimation } from "react-type-animation";
import HeaderImage from "../assets/haryo-img.jpg";

const About = ({ data, isDarkMode }: any) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out-back"
      className="py-10"
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:text-left text-justify">
          <TypeAnimation
            className={`text-2xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            style={{
              lineHeight: 1.5,
              whiteSpace: "pre-line",
              display: "block",
            }}
            sequence={[
              `Hello I'm ${data?.name}\nFrontend Developer\nBased In Indonesia`,
            ]}
            speed={50}
            omitDeletionAnimation
            repeat={0}
          />
          <div className="text-sm md:text-lg font-semibold text-gray-500 mt-5">
            {data?.description}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white/20">
            <img
              src={HeaderImage}
              alt="Haryo Novianto"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
