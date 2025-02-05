import Sass from "../assets/skills/sass.png";
import Next from "../assets/skills/nextjs.png";
import Reactjs from "../assets/skills/reactjs.png";
import UnitTest from "../assets/skills/unittest.png";
import Javascript from "../assets/skills/javascript.png";
import Typescript from "../assets/skills/typescript.png";
import Vuejs from "../assets/skills/vuejs.png";
import Angularjs from "../assets/skills/angularjs.png";
import Git from "../assets/skills/git.png";

// Define a type for the icon keys to make it more explicit
type IconNames =
  | "sass"
  | "nextjs"
  | "reactjs"
  | "unittest"
  | "javascript"
  | "typescript"
  | "vuejs"
  | "angularjs"
  | "git";

export default function Skills({ data }: any) {
  // Mapping icon names to imported images
  const icons: Record<IconNames, string> = {
    sass: Sass,
    nextjs: Next,
    reactjs: Reactjs,
    unittest: UnitTest,
    javascript: Javascript,
    typescript: Typescript,
    vuejs: Vuejs,
    angularjs: Angularjs,
    git: Git,
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-easing="ease-in-out-back"
      className="container mx-auto my-16 md:my-24 lg:my-[100px]"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          My <span className="font-bold">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-12 lg:mt-[70px] justify-items-center">
          {data?.skills?.map((el: { icon: IconNames; name: string }) => (
            <div
              key={el.name}
              className="border-2 border-black flex flex-col items-center justify-center 
                         w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]
                         hover:scale-105 lg:hover:scale-110 transition-all duration-300
                         cursor-pointer"
            >
              <img
                src={icons[el.icon]}
                alt={el.name}
                className="w-10 sm:w-11 lg:w-[50px] h-auto"
              />
              <div className="mt-3 md:mt-4 lg:mt-5 text-xs sm:text-sm font-medium">
                {el.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
