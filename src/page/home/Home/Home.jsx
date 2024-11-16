import React, { useState } from "react";
import FeaturedServicesCom from "../FeaturedCom/FeaturedServicesCom";
import TreatmentCom from "../TreatmentCom/TreatmentCom";
import Banner from "../../../component/share/Header/Banner";
import TestimonialsCom from "../../../component/share/TestimonialsCom/TestimonialsCom";
import MembershipCom from "../../../component/share/MembershipCom/MembershipCom";
import AboutDoctorCom from "../../../component/share/AboutDoctorCom/AboutDoctorCom";
import BannerBottom from "../BannerBottom/BannerBottom";

function Home() {
  return (
    <div>
      <Banner />
      <BannerBottom />
      <FeaturedServicesCom />
      <TreatmentCom />
      <AboutDoctorCom />
      <MembershipCom />
      <TestimonialsCom />
    </div>
  );
}

export default Home;
