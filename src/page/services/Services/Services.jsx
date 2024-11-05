import React from "react";
import ServicesBannerCom from "../ServicesBannerCom/ServicesBannerCom";
import OurSecvicesCom from "../OurSecvicesCom/OurSecvicesCom";
import MembershipCom from "../../../component/share/MembershipCom/MembershipCom";
import Health360Com from "../../../component/share/Health360Com/Health360Com";

function Services() {
  return (
    <div>
      <ServicesBannerCom />
      <OurSecvicesCom />
      <MembershipCom />
      <Health360Com />
    </div>
  );
}

export default Services;
