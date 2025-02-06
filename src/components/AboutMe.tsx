import AboutImage from "../assets/about-me.png";

const AboutMe = ({ data }: any) => {
  return (
    <div
      data-aos="fade-right"
      className="container mx-auto px-4 py-10 md:py-16 text-justify"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={AboutImage}
            alt="about-img"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl mb-6 md:mb-8">
            About <span className="font-bold">Me</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
