import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./index.css";
import "animate.css";
import MainPage from "./Pages/MainPage/MainPage";
import "swiper/css";

function App() {
  return (
    <div className="main">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
