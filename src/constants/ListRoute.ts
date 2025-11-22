import homeIcon from "../assets/icon/navbar/home-2-line.svg?url";
import briefcaseIcon from "../assets/icon/navbar/briefcase-line.svg?url";
import folderIcon from "../assets/icon/navbar/folder-2-line.svg?url";
import wrenchIcon from "../assets/icon/navbar/wrench-line.svg?url";
import bookIcon from "../assets/icon/navbar/book-shelf-line.svg?url";

export const listRoute = [
  {
    id: 1,
    title: "Home",
    path: "#home",
    icon: homeIcon,
  },
  {
    id: 2,
    title: "Experience",
    path: "#experience",
    icon: briefcaseIcon,
  },
  {
    id: 3,
    title: "Projects",
    path: "#projects",
    icon: folderIcon,
  },
  {
    id: 4,
    title: "Skills",
    path: "#skills",
    icon: wrenchIcon,
  },
  {
    id: 5,
    title: "Contact",
    path: "#contact",
    icon: bookIcon,
  },
];

export default listRoute
