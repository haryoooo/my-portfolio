import "./App.css";
import Header from "./pages/Header";
import Homeview from "./pages/Homeview";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { handleScroll } from "./utils/handleScroll";
import { getDataList } from "./services/getData";

import "aos/dist/aos.css";
import AOS from "aos";
import Loader from "./components/Loader";

function App() {
  const [dataList, setDataList] = useState<any>([]);

  const fetchData = async () => {
    try {
      const data = await getDataList();
      setDataList(data?.[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleScroll("top");
    fetchData();
    AOS.init({
      duration: 1000,
      once: true,
      offset: 400,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <div>
      {dataList.length === 0 ? (
        <Loader />
      ) : (
        <>
          {/* Header with high z-index */}
          <div className="sticky top-0 z-50 bg-white shadow-md">
            <Header dataList={dataList} />
          </div>

          {/* Homeview with lower z-index */}
          <div className="relative z-10">
            <Homeview dataList={dataList} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
