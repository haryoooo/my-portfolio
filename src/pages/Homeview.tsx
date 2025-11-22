import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import SkillsImages from "../components/SkillsImages";
import Languages from "../components/Languages";
import Contact from "../components/Contact";

import { PortfolioData } from "../types/portfolioType";
import { ComponentType, useEffect } from "react";
import Header from "../components/Header";
import AOS from "aos";

interface HomeviewProps {
  dataList: PortfolioData;
}

interface SectionItem {
  component: ComponentType<any>;
  withData: boolean;
}


const SECTIONS: SectionItem[] = [
  { component: Header, withData: true },
  { component: Profile, withData: true },
  { component: About, withData: true },
  { component: Experience, withData: true },
  { component: Projects, withData: true },
  { component: Education, withData: true },
  { component: Certifications, withData: true },
  { component: Skills, withData: true },
  { component: SkillsImages, withData: false },
  { component: Languages, withData: true },
  { component: Contact, withData: true },
];

export default function Homeview({ dataList }: HomeviewProps) {
  useEffect(() => {
    // Refresh AOS when components mount
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-[50px] pb-24">
      {SECTIONS.map(({ component: Component, withData }, index) =>
        withData ? (
          <Component key={index} data={dataList} />
        ) : (
          <Component key={index} />
        )
      )}
    </div>
  );
}
