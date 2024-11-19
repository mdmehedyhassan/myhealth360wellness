import React from "react";
import ServicesBannerCom from "../ServicesBannerCom/ServicesBannerCom";
import OurServicesCom from "../OurServicesCom/OurServicesCom";
import MembershipCom from "../../../component/share/MembershipCom/MembershipCom";
import Health360Com from "../../../component/share/Health360Com/Health360Com";

function Services() {
  return (
    <div>
      <ServicesBannerCom />
      <OurServicesCom />
      <MembershipCom />
      <Health360Com />
    </div>
  );
}

export default Services;
