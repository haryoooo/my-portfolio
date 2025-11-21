import "./App.css";
import Header from "./pages/Header";
import Homeview from "./pages/Homeview";

import { useEffect, useState } from "react";
import { handleScroll } from "./utils/handleScroll";
import { getDataList } from "./services/getData";
import { PortfolioData } from "./types/portfolioType";

import Loader from "./components/Loader";

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
    handleScroll("top");
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {!dataList ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Homeview dataList={dataList} />
        </>
      )}
    </div>
  );
}

export default App;
