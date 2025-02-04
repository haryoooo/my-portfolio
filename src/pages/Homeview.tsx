import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Homeview({ dataList }: any) {
  return (
    <>
      <div className="px-5 md:px-[50px]">
        <About data={dataList} />
      </div>
      <div id="skills" className="px-5 md:px-[50px]">
        <Skills data={dataList} />
      </div>
      <div id="experience" className="bg-black my-5">
        <Experience data={dataList} />
      </div>
      <div id="about" className="px-5 md:px-[50px]">
        <AboutMe data={dataList} />
      </div>
      <div id="projects" className="bg-black my-5">
        <Projects data={dataList} />
      </div>
      <div id="contact" className="px-5 md:px-[50px]">
        <Contact data={dataList} />
      </div>
    </>
  );
}
