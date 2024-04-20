import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./index.css";
import "animate.css";
import MainPage from "./Pages/MainPage/MainPage";
import "swiper/css";
import { useEffect, useState } from "react";
import GetToUp from "./Components/GetToUp/GetToUp";
import { Routes, Route, Outlet } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import EpisodesPage from "./Pages/EpisodesPage/EpisodesPage";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      {scrollPosition > 500 ? <GetToUp /> : undefined}
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<MainPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          {/*  <Route path="more" element={<DashboardTasks />} />*/}
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
