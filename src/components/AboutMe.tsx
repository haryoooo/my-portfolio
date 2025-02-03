import AboutImage from "../assets/about-me.png";

const AboutMe = ({ data }: any) => {
  return (
      <div className="container py-10">
        <div className="flex justify-start">
          <div className="w-full">
            <img src={AboutImage} alt="about-img" className="w-full max-w-sm"  />
          </div>
          <div className="px-10 text-justify text-left">
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12">
              About <span className="font-bold">Me</span>
            </h2>

            <div>
              <p className="text-sm text-gray-500">{data.description}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutMe;
