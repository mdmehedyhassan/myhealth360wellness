import './App.css';
import './css/global.css';
import loadingImg from './img/loaing.svg';
import Loadable from 'react-loadable';
import { Route, Routes } from 'react-router-dom';


import Header from './component/share/Header/Header';
import Footer from './component/share/Footer/Footer';

const Home = Loadable({
  loader: () => import('./page/home/Home/Home'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const About = Loadable({
  loader: () => import('./page/about/About/About'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const Services = Loadable({
  loader: () => import('./page/services/Services/Services'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const Package = Loadable({
  loader: () => import('./page/package/Package/Package'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const Contact = Loadable({
  loader: () => import('./page/contact/Contact/Contact'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const NotFound = Loadable({
  loader: () => import('./page/notFound/NotFound/NotFound'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});
const IVInfusionBar = Loadable({
  loader: () => import('./services-page/iv-infusion-bar/IVInfusionBar/IVInfusionBar'),
  loading: () =>  <div className='class-for-svg-img'><img src={loadingImg} alt=''/></div>
});


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/packages" element={<Package />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/services/iv-infusion-bar" element={<IVInfusionBar />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
