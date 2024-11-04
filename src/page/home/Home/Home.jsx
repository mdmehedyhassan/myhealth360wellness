import React from "react";
import FeaturedServicesCom from "../FeaturedCom/FeaturedServicesCom";
import TreatmentCom from "../TreatmentCom/TreatmentCom";
import Banner from "../../../component/share/Header/Banner";
import AboutDoctorCom from "../AboutDoctorCom/AboutDoctorCom";
import MembershipCom from "../MembershipCom/MembershipCom";
import TestimonialsCom from "../TestimonialsCom/TestimonialsCom";

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
