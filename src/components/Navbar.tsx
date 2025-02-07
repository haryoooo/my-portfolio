import { listRoute } from "../constants/ListRoute";
import routesType from "../types/routesType";
import { handleScroll } from "../utils/handleScroll";

interface NavbarType {
  isDarkMode: boolean;
}

export default function Navbar({ isDarkMode }: NavbarType) {
  return (
    <div>
      {listRoute.map((el: routesType) => (
        <div className="block md:inline mb-3 cursor-pointer" key={el.path}>
          <a
            className={
              isDarkMode
                ? `mx-3 text-white hover:text-white hover:underline`
                : `mx-3 text-black hover:text-black hover:underline`
            }
            onClick={() => handleScroll(el.path.replace("#", ""))}
          >
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
}
