import "./App.css";
import Homeview from "./pages/Homeview";

import { useEffect, useState } from "react";
import { handleScroll } from "./utils/handleScroll";
import { getDataList } from "./services/getData";
import { PortfolioData } from "./types/portfolioType";
import AOS from "aos";

import Loader from "./components/Loader";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  const [dataList, setDataList] = useState<PortfolioData | null>(null);

  const fetchData = async () => {
    try {
      const data = await getDataList();
      setDataList(data?.[0] || null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
    handleScroll("top");
    fetchData();
  }, []);

  useEffect(() => {
    if (dataList) {
      // Refresh AOS when data loads to detect new elements
      AOS.refresh();
    }
  }, [dataList]);

  return (
    <div className="min-h-screen bg-white">
      {!dataList ? (
        <Loader />
      ) : (
        <>
          <Homeview dataList={dataList} />
          <BottomNavbar />
        </>
      )}
    </div>
  );
}

export default App;
