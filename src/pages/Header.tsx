import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/ButtonClick";
import download from "../assets/icon/download.png";
import { handleScroll } from "../utils/handleScroll";
import { useOutsideClick } from "../utils/useOutsideClick";

export default function Header({ dataList, isDarkMode }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside, but ignore clicks inside the button
  useOutsideClick(menuRef, () => setIsOpen(false), buttonRef);

  return (
    <header className="relative w-full sticky top-0">
      <div className={`flex justify-between items-center px-5 md:px-[50px] ${isDarkMode ? "bg-black text-gray-500" : "bg-white"} py-3`}>
        {/* Logo */}
        <h3
          onClick={() => handleScroll("top")}
          className="font-bold text-lg cursor-pointer"
        >
          Portfolio.
        </h3>

        {/* Hamburger Button for Mobile */}
        <div
          ref={buttonRef} // Exclude clicks inside this button
          className="md:hidden flex flex-col space-y-1 focus:outline-none cursor-pointer hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-500 font-bold transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-500 font-bold transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-500 font-bold transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar isDarkMode={isDarkMode} />
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

      {/* Mobile Navbar Dropdown */}
      <div
        ref={menuRef}
        className={`absolute top-10 right-0 text-end w-1/2 rounded-lg p-3 ${isDarkMode ? "bg-gray-700 outline-white" : "bg-white"} shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        } md:hidden`}
      >
        <Navbar isDarkMode={isDarkMode} />
        <div className="flex justify-end items-end text-end mr-3">
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
