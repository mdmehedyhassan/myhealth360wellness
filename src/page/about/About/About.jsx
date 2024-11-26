import AboutBannerCom from "../AboutBannerCom/AboutBannerCom";
import AboutDoctorCom from "../../../component/share/AboutDoctorCom/AboutDoctorCom";
import VisionMissionCom from "../VisionMissionCom/VisionMissionCom";
import OurValuesCom from "../OurValuesCom/OurValuesCom";
import Health360Com from "../../../component/share/Health360Com/Health360Com";
import WhoWeAreCom from "../WhoWeAreCom/WhoWeAreCom";

function About() {
  return (
    <div className="bg-bgPrimary">
      <AboutBannerCom />
      <AboutDoctorCom />
      <VisionMissionCom />
      <Health360Com />
      <OurValuesCom />
      <WhoWeAreCom />
    </div>
  );
}

export default About;
