import React from "react";
import Marquee from "react-fast-marquee";
import instaImg1 from "../../../../img/Footer/InstagramCom/insta1.png";
import instaImg2 from "../../../../img/Footer/InstagramCom/insta2.png";
import instaImg3 from "../../../../img/Footer/InstagramCom/insta3.png";
import instaImg4 from "../../../../img/Footer/InstagramCom/insta4.png";
import instaImg5 from "../../../../img/Footer/InstagramCom/insta5.png";
import instaImg6 from "../../../../img/Footer/InstagramCom/insta6.png";
import instaImg7 from "../../../../img/Footer/InstagramCom/insta6.png";
const InstagramCom = () => {
  return (
    <div className="bg-bgPrimary pb-1 -z-10">
      <h3 className="text-textPrimary text-[28px] md:text-5xl font-bold leading-[120%] text-center mb-10">
        Our Instagram
      </h3>
      <Marquee style={{ zIndex: 1 }}>
        <img className="mr-1" src={instaImg1} alt="" />
        <img className="mr-1" src={instaImg2} alt="" />
        <img className="mr-1" src={instaImg3} alt="" />
        <img className="mr-1" src={instaImg4} alt="" />
        <img className="mr-1" src={instaImg5} alt="" />
        <img className="mr-1" src={instaImg6} alt="" />
        <img className="mr-1" src={instaImg7} alt="" />
        <img className="mr-1" src={instaImg1} alt="" />
        <img className="mr-1" src={instaImg2} alt="" />
        <img className="mr-1" src={instaImg3} alt="" />
        <img className="mr-1" src={instaImg4} alt="" />
        <img className="mr-1" src={instaImg5} alt="" />
        <img className="mr-1" src={instaImg6} alt="" />
        <img className="mr-1" src={instaImg7} alt="" />
      </Marquee>
    </div>
  );
};

export default InstagramCom;
