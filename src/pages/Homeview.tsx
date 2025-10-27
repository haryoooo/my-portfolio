import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
// import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Homeview({ dataList, isDarkMode }: any) {
  return (
    <>
      <div className="px-5 md:px-[50px]">
        <About data={dataList} isDarkMode={isDarkMode} />
      </div>
      <div id="skills" className="px-5 md:px-[50px]">
        <Skills data={dataList} isDarkMode={isDarkMode} />
      </div>
      <div id="experience" className="bg-black mt-5">
        <Experience data={dataList} isDarkMode={isDarkMode} />
      </div>
      {/* <div id="about" className="px-5 md:px-[50px]">
        <AboutMe data={dataList} isDarkMode={isDarkMode} />
      </div> */}
      <div id="projects" className="bg-black">
        <Projects data={dataList} />
      </div>
      <div id="contact" className="px-5 md:px-[50px]">
        <Contact data={dataList} isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
