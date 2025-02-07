import HeaderImage from "../assets/banner.png";

const About = ({ data }: any) => {
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
          <div className="text-2xl md:text-5xl text-black">
            <span className="text-md font-semibold">Hello I'm </span>
            <span className="font-bold">{data.name}</span>
          </div>

          <div className="text-xl md:text-4xl font-bold my-4 md:my-8 text-black">
            <span className="font-semibold">Frontend</span>{" "}
            <span className="font-bold">Developer</span>
          </div>

          <div className="text-xl md:text-3xl my-4 md:my-8 text-black">
            <span className="font-semibold">Based In</span> <span className="font-bold">{data.citizen}.</span>
          </div>

          <div className="text-sm text-gray-500">{data.description}</div>
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
