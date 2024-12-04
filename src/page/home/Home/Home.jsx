import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import BannerBottom from "../BannerBottom/BannerBottom";
import FeaturedServicesCom from "../FeaturedServicesCom/FeaturedServicesCom";
import TreatmentCom from "../TreatmentCom/TreatmentCom";
import AboutDoctorCom from "../../../component/share/AboutDoctorCom/AboutDoctorCom";
import MembershipCom from "../../../component/share/MembershipCom/MembershipCom";
import TestimonialsCom from "../../../component/share/TestimonialsCom/TestimonialsCom";

function Home() {
  return (
    <div className="bg-bgPrimary">
      <HomeBanner />
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
