import React, { useEffect, useState } from "react";
import { getDataList } from "../services/getData";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";

export default function Homeview() {
  const [dataList, setDataList] = useState<any>([]);

  const fetchData = async () => {
    try {
      const data = await getDataList();
      console.log(data);
      setDataList(data?.[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="px-5 md:px-[50px]">
        <About data={dataList} />
      </div>
      <div className="px-5 md:px-[50px]">
        <Skills data={dataList} />
      </div>
      <div className="bg-black my-5">
        <Experience data={dataList} />
      </div>
      <div className="px-5 md:px-[50px]">
        <AboutMe data={dataList} />
      </div>
    </div>
  );
}
