import Next from "../assets/skills/nextjs.png";
import UnitTest from "../assets/skills/unittest.png";
import Typescript from "../assets/skills/typescript.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faAngular,
  faSass,
  faReact,
  faJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

// Define a type for icon names
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

// Update the type to support both FontAwesome icons (objects) and image paths (strings)
const icons: Record<IconNames, string | any> = {
  sass: faSass,
  nextjs: Next,
  reactjs: faReact,
  unittest: UnitTest,
  javascript: faJs,
  typescript: Typescript,
  vuejs: faVuejs,
  angularjs: faAngular,
  git: faGit,
};

export default function Skills({ data, isDarkMode }: any) {
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="ease-in-out-back"
      className="container mx-auto my-16 md:my-24 lg:my-[100px]"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          My <span className="font-bold">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-12 lg:mt-[70px] justify-items-center">
          {data?.skills?.map((el: { icon: IconNames; name: string }) => (
            <div
              key={el.name}
              className={`border-2 ${
                isDarkMode ? "border-white" : "border-black"
              } flex flex-col items-center justify-center 
                         w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]
                         hover:scale-105 lg:hover:scale-110 transition-all duration-300
                         cursor-pointer`}
            >
              {/* Check if the icon is an image path (string) or FontAwesome icon */}
              {typeof icons[el.icon] === "string" ? (
                <img
                  src={icons[el.icon]}
                  alt={el.name}
                  className="w-10 sm:w-11 lg:w-[50px] h-auto"
                />
              ) : (
                <FontAwesomeIcon icon={icons[el.icon]} className="text-5xl" />
              )}

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
