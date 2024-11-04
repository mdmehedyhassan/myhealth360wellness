import AboutBannerCom from "../AboutBannerCom/AboutBannerCom";
import AboutDoctorCom from "../../../component/share/AboutDoctorCom/AboutDoctorCom";
import VisionMissionCom from "../VisionMissionCom/VisionMissionCom";
import Health360Com from "../Health360Com/Health360Com";
import OurValuesCom from "../OurValuesCom/OurValuesCom";
import WhyWeAreCom from "../WhyWeAreCom/WhyWeAreCom";

function About() {
  return (
    <div className="bg-[#e9f0ec]">
      <AboutBannerCom />
      <AboutDoctorCom />
      <VisionMissionCom />
      <Health360Com />
      <OurValuesCom />
      <WhyWeAreCom />
    </div>
  );
}

export default About;
