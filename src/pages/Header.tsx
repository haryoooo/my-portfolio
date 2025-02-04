import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/ButtonClick";
import download from "../assets/icon/download.png";
import { handleScroll } from "../utils/handleScroll";
// import { useOutsideClick } from "../utils/useOutsideClick";

export default function Header({ dataList }: any) {
  const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useOutsideClick(() => setIsOpen(false)); // Close menu when clicking outside

  return (
    <header className="relative w-full sticky top-0">
      <div className="flex justify-between items-center my-5 px-5 md:px-[50px] bg-white py-3">
        {/* Logo */}
        <div
          onClick={() => handleScroll("top")}
          className="font-bold text-lg cursor-pointer"
        >
          Portfolio.
        </div>

        {/* Hamburger Button for Mobile */}
        <div
          className="md:hidden flex flex-col space-y-1 focus:outline-none cursor-pointer hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button
            link={dataList?.url_pdf}
            titles={"Resume"}
            url={download}
            width={18}
          />
        </div>
      </div>

      {/* Mobile Navbar Dropdown with Animation */}
      <div
        // ref={menuRef}
        className={`absolute top-10 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        } md:hidden`}
      >
        <Navbar />
        <div className="flex justify-center items-center text-center mb-5">
          <Button 
            link={dataList?.url_pdf}
            titles={"Resume"}
            url={download}
            width={18}
          />
        </div>
      </div>
    </header>
  );
}
