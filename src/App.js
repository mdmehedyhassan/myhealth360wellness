import './App.css';
import './css/global.css';
import loadingImg from './img/loading.gif';
import Loadable from 'react-loadable';
import { Route, Routes } from 'react-router-dom';



const Header = Loadable({
  loader: () => import('./component/share/Header/Header'),
  loading: () =>  <div className='class-for-svg-img'>Loading...</div>
});
const Footer = Loadable({
  loader: () => import('./component/share/Footer/Footer'),
  loading: () =>  <div className='class-for-svg-img'>Loading...</div>
});
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
