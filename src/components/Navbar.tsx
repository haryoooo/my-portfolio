import { listRoute } from "../constants/ListRoute";
import routesType from "../types/routesType";
import { handleScroll } from "../utils/handleScroll";

export default function Navbar() {
  return (
    <div>
      {listRoute.map((el: routesType) => (
        <div className="block md:inline mb-3 cursor-pointer" key={el.path}>
          <a
            className="mx-3 text-black hover:text-black"
            onClick={() => handleScroll(el.path.replace("#", ""))}
          >
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
}
