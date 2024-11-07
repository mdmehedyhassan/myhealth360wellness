import React from "react";
import IvInfusionBarBannerCom from "../IvInfusionBarBannerCom/IvInfusionBarBannerCom";
import TestimonialsCom from "../../../component/share/TestimonialsCom/TestimonialsCom";
import TherapyCom from "../TherapyCom/TherapyCom";
import WhyShouldCom from "../WhyShouldCom/WhyShouldCom";
import CocktailBarCom from "../CocktailBarCom/CocktailBarCom";
import TherapyBookCom from "../TherapyBookCom/TherapyBookCom";
import Accordion from "../Accordion/Accordion";
import Locations from "../Locations/Locations";

function IVInfusionBar() {
  return (
    <div>
      <IvInfusionBarBannerCom />
      <TherapyCom />
      <WhyShouldCom />
      <CocktailBarCom />
      <TherapyBookCom />
      <Accordion />
      <Locations />
      <TestimonialsCom />
    </div>
  );
}

export default IVInfusionBar;
