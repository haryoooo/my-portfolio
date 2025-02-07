import { TypeAnimation } from "react-type-animation";
import HeaderImage from "../assets/banner.png";

const About = ({ data, isDarkMode }: any) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out-back"
      className="py-10"
    >
      {/* Main container with responsive flex layout */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8">
        {/* Left Content - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 md:text-left text-justify">
          <TypeAnimation
            className={`text-2xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            style={{
              lineHeight: 1.8,
              whiteSpace: "pre-line",
              display: "block",
            }}
            sequence={[
              `Hello I'm ${data?.name} \n Frontend Developer \nBased In Indonesia`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              "",
            ]}
            repeat={Infinity}
          />

          <div className="text-sm font-semibold text-gray-500 mt-5">{data?.description}</div>
        </div>

        {/* Right Image - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2">
          <img
            src={HeaderImage}
            alt="header"
            className="w-full max-w-sm mx-auto md:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
