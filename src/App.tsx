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
import { SnackbarProvider } from "notistack";

function App() {
  const [dataList, setDataList] = useState<any>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window?.matchMedia("(prefers-color-scheme: dark)")?.matches
  );

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

    // Listen for dark mode changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <div className={isDarkMode ? "main-bg-dark" : "main-bg"}>
        {dataList.length === 0 ? (
          <Loader />
        ) : (
          <>
            {/* Header with high z-index */}
            <div className="sticky top-0 z-50 shadow-md">
              <Header isDarkMode={isDarkMode} dataList={dataList} />
            </div>

            {/* Homeview with lower z-index */}
            <div className="relative z-10">
              <Homeview dataList={dataList} />
            </div>
          </>
        )}
      </div>
    </SnackbarProvider>
  );
}

export default App;
