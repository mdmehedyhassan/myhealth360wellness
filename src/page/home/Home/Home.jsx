import React from 'react'
import FeaturedServicesCom from '../FeaturedCom/FeaturedServicesCom';
import TreatmentCom from '../TreatmentCom/TreatmentCom';
import Banner from '../../../component/share/Header/Banner';
import AboutDoctorCom from '../AboutDoctorCom/AboutDoctorCom';

function Home() {
  

  return (
    <div>
    <Banner/>
    <FeaturedServicesCom/>
    <TreatmentCom/>
    <AboutDoctorCom/>
    </div>
  )
}

export default Home;
