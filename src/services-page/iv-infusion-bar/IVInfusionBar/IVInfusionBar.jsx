import React from "react";
import IvInfusionBarBannerCom from "../IvInfusionBarBannerCom/IvInfusionBarBannerCom";
import TestimonialsCom from "../../../component/share/TestimonialsCom/TestimonialsCom";
import TherapyCom from "../TherapyCom/TherapyCom";
import WhyShouldCom from "../WhyShouldCom/WhyShouldCom";
import CocktailBarCom from "../CocktailBarCom/CocktailBarCom";
import TherapyBookCom from "../TherapyBookCom/TherapyBookCom";

function IVInfusionBar() {
  return (
    <div>
      <IvInfusionBarBannerCom />
      <TherapyCom />
      <WhyShouldCom />
      <CocktailBarCom />
      <TherapyBookCom />
      <TestimonialsCom />
    </div>
  );
}

export default IVInfusionBar;
