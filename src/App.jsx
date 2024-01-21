import "./App.css";
import Banner from "./components/Banner";
import DailyActivityCard from "./components/DailyActivityCard";
import Cards from "./components/layouts/Cards";
import GetInTouch from "./components/layouts/GetInTouch";
import Navbar from "./components/layouts/Navbar";
import NavbarTop from "./components/layouts/NavbarTop";

function App() {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Banner />
      <Cards/>
      <DailyActivityCard/>
      <GetInTouch/>
    </>
  );
}

export default App;
