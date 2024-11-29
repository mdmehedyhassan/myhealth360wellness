import React, { useEffect, useState } from "react";
import "./App.css";
import "./css/global.css";
import loadingImg from "./img/loading.gif";
import Loadable from "react-loadable";
import { Route, Routes, useLocation } from "react-router-dom";
import ThemeSelectorCom from "./component/share/ThemeSelectorCom/ThemeSelectorCom";

const Navbar = Loadable({
  loader: () => import("./component/share/Navbar/Navbar"),
  loading: () => <div className="class-for-svg-img">Loading...</div>,
});
const Footer = Loadable({
  loader: () => import("./component/share/Footer/Footer"),
  loading: () => <div className="class-for-svg-img">Loading...</div>,
});
const Home = Loadable({
  loader: () => import("./page/home/Home/Home"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const About = Loadable({
  loader: () => import("./page/about/About/About"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const Services = Loadable({
  loader: () => import("./page/services/Services/Services"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const Package = Loadable({
  loader: () => import("./page/package/Package/Package"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const Contact = Loadable({
  loader: () => import("./page/contact/Contact/Contact"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const NotFound = Loadable({
  loader: () => import("./page/notFound/NotFound/NotFound"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});
const IVInfusionBar = Loadable({
  loader: () =>
    import("./services-page/iv-infusion-bar/IVInfusionBar/IVInfusionBar"),
  loading: () => (
    <div className="class-for-svg-img">
      <img src={loadingImg} alt="" />
    </div>
  ),
});

function App() {
  const [theme, setTheme] = useState();
  const location = useLocation();
    const path = location.pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path])
  return (
    <div className={`theme-${theme}`}>
      <ThemeSelectorCom setTheme={setTheme} className="z-50" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/iv-infusion-bar" element={<IVInfusionBar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
