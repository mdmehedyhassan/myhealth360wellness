import React, { useState } from "react";
import athleticPerformanceImg from "../../../img/IV-Infusion-Bar/athletic-performance.png";
import wellnessBoosterImg from "../../../img/IV-Infusion-Bar/wellness-booster.png";
import skinnyShotImg from "../../../img/IV-Infusion-Bar/skinny-shot.png";
import glowShotImg from "../../../img/IV-Infusion-Bar/glow-shot.png";
import myersCocktailImg from "../../../img/IV-Infusion-Bar/myers-cocktail.png";
import heavyMetalChelationImg from "../../../img/IV-Infusion-Bar/heavy-metal-chelation.png";
import byoivImg from "../../../img/IV-Infusion-Bar/B.Y.O.I.V.png";
import { Link } from "react-router-dom";

const options = [
  {
    img: athleticPerformanceImg,
    title: "Athletic Performance",
    content:
      "Enhance your athletic performance by optimizing your nutritional status with IV blend of amino acids, B complex, and antioxidants. Increase aerobic muscular endurance with amino acids to enhance physical performance, expedite recovery, and improve activity tolerance while antioxidants help reduce recovery time from exercise.",
    url: "",
  },
  {
    img: wellnessBoosterImg,
    title: "Wellness Booster",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti commodo finibus ante; laoreet lacus habitant libero. Quisque facilisi rhoncus aliquam molestie volutpat. Finibus condimentum arcu volutpat tortor ipsum vitae nisi erat ultrices. Tempus parturient donec quisque; dapibus libero enim. Tempor adipiscing auctor litora habitant blandit amet ante fusce. ",
    url: "",
  },
  {
    img: skinnyShotImg,
    title: "Skinny Shot",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis diam taciti mauris varius sociosqu aptent ullamcorper. Elementum nulla potenti parturient cubilia arcu hendrerit commodo interdum in. Natoque dictum luctus quis fames ligula. Ridiculus pharetra dictum orci vehicula augue inceptos nunc molestie? Blandit torquent nec malesuada facilisi metus blandit nisl.",
    url: "",
  },
  {
    img: glowShotImg,
    title: "Glow Shot",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat aptent facilisi vitae orci egestas aliquam. Per dictumst senectus sit tempor est pharetra. Consequat accumsan gravida mi mollis litora. Ligula vulputate ligula netus mattis vehicula, mi magna id. Mattis pulvinar scelerisque adipiscing; eros morbi vehicula.",
    url: "",
  },
  {
    img: myersCocktailImg,
    title: "Myers Cocktail",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis cras vehicula dapibus interdum lacinia finibus metus molestie. Orci netus fames erat maximus; erat himenaeos duis. Molestie nam tempus molestie efficitur urna egestas integer. Posuere ut maecenas class dolor mi, dis euismod lacinia. Ipsum rutrum accumsan curabitur pulvinar commodo fames quisque sapien.",
    url: "",
  },
  {
    img: heavyMetalChelationImg,
    title: "Heavy Metal Chelation",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus finibus mus aptent etiam egestas sem. Enim facilisi eu congue conubia massa cubilia id dui. Nulla eu quisque et mauris curae urna. Vivamus donec egestas maecenas commodo himenaeos congue. Vitae dis proin quisque ante faucibus ridiculus. Metus turpis lacinia cursus himenaeos hendrerit lobortis.",
    url: "",
  },
  {
    img: byoivImg,
    title: "B.Y.O.I.V.",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida eros aenean inceptos vehicula conubia donec venenatis. Enim fermentum natoque vitae netus sollicitudin consectetur ridiculus? Enim nibh hac cubilia porttitor mauris primis fusce fames mi. Etiam eleifend blandit pulvinar nibh tempor tellus fames. Lorem egestas curabitur ridiculus; mauris hac nostra.",
    url: "",
  },
];

const CocktailBarCom = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-full px-2 lg:px-5">
      <div className="py-5 lg:py-10 pb-16 lg:pb-[74px] bg-bgSecondary rounded-t-xl w-full ">
        <h1 className="text-textPrimary text-center font-bold text-3xl lg:text-5xl px-5 my-10">
          What Concerns Would You Like To Address?
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center text-start px-4 ">
          <div className="flex w-full lg:w-auto ">
            <div className="lg:w-[250px] w-full lg:bg-white py-5 lg:p-5 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 lg:border-2 border-borderPrimary rounded-xl gap-3 ">
              {options.map((option) => (
                <button
                  key={option.title}
                  className={`w-auto p-3 text-sm lg:text-lg text-nowrap rounded-full hover:bg-primary hover:text-white transition-colors duration-500 ease-in-out capitalize ${
                    selectedOption.title === option.title
                      ? "bg-primary text-white border border-borderPrimary"
                      : "bg-white text-primary border border-borderPrimary"
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="hidden md:hidden lg:block lg:mr-2">
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-borderPrimary relative mt-8"></div>
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-white absolute -mt-[2.5rem] -ml-1"></div>
            </div>
          </div>

          <div className="lg:w-[1027px] bg-white border-2 border-borderPrimary rounded-xl flex itmes-center p-5 lg:p-10">
            <div className="flex flex-col justify-center items-start lg:w-[60%] ">
              <div className="flex justify-center items-center mb-3 lg:hidden">
                <img
                  className="rounded-xl "
                  src={selectedOption.img}
                  alt={selectedOption.title}
                />
              </div>
              <h1 className="text-primary font-bold text-2xl  lg:text-3xl  pb-[20px] capitalize ">
                {selectedOption.title}
              </h1>
              <p>{selectedOption.content}</p>
              <Link href={selectedOption.url}>
                <button className="text-primary text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-borderPrimary rounded-full hover:bg-primary hover:text-white my-3 transition-colors duration-500 ease-in-out">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="hidden lg:flex justify-center items-center ">
              <img
                className="rounded-xl "
                src={selectedOption.img}
                alt={selectedOption.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailBarCom;
