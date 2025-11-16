import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Contact from "../components/Contact";

export default function Homeview({ dataList }: any) {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-[50px]">
      <Profile data={dataList} />
      <About data={dataList} />
      <Experience data={dataList} />
      <Projects data={dataList} />
      <Education data={dataList} />
      <Certifications data={dataList} />
      <Skills data={dataList} />
      <Languages data={dataList} />
      <Contact data={dataList} />
    </div>
  );
}
