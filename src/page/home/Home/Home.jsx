import React from "react";
import FeaturedServicesCom from "../FeaturedCom/FeaturedServicesCom";
import TreatmentCom from "../TreatmentCom/TreatmentCom";
import Banner from "../../../component/share/Header/Banner";
import MembershipCom from "../../../component/share/MembershipCom/MembershipCom";
import TestimonialsCom from "../TestimonialsCom/TestimonialsCom";
import AboutDoctorCom from "../../../component/share/AboutDoctorCom/AboutDoctorCom";

function Home() {
  return (
    <div>
      <Banner />
      <FeaturedServicesCom />
      <TreatmentCom />
      <AboutDoctorCom />
      <MembershipCom />
      <TestimonialsCom />
    </div>
  );
}

export default Home;
