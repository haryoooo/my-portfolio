import "./App.css";
import Header from "./pages/Header";
import Homeview from "./pages/Homeview";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { handleScroll } from "./utils/handleScroll";
import { getDataList } from "./services/getData";

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
  }, []);

  return (
    <div>
      <Header dataList={dataList} />
      <Homeview dataList={dataList} />
    </div>
  );
}

export default App;
