import React, { useState } from "react";
import Img from "../../../img/IV-Infusion-Bar/cocktailbar.png";

const options = [
  {
    img: Img,
    title: "Athletic Performance",
    content:
      "Enhance your athletic performance by optimizing your nutritional status with IV blend of amino acids, B complex, and antioxidants. Increase aerobic muscular endurance with amino acids to enhance physical performance, expedite recovery, and improve activity tolerance while antioxidants help reduce recovery time from exercise.",
    url: "",
  },
  {
    img: Img,
    title: "Wellness Booster",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti commodo finibus ante; laoreet lacus habitant libero. Quisque facilisi rhoncus aliquam molestie volutpat. Finibus condimentum arcu volutpat tortor ipsum vitae nisi erat ultrices. Tempus parturient donec quisque; dapibus libero enim. Tempor adipiscing auctor litora habitant blandit amet ante fusce. ",
    url: "",
  },
  {
    img: Img,
    title: "Skinny Shot",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis diam taciti mauris varius sociosqu aptent ullamcorper. Elementum nulla potenti parturient cubilia arcu hendrerit commodo interdum in. Natoque dictum luctus quis fames ligula. Ridiculus pharetra dictum orci vehicula augue inceptos nunc molestie? Blandit torquent nec malesuada facilisi metus blandit nisl.",
    url: "",
  },
  {
    img: Img,
    title: "Glow Shot",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat aptent facilisi vitae orci egestas aliquam. Per dictumst senectus sit tempor est pharetra. Consequat accumsan gravida mi mollis litora. Ligula vulputate ligula netus mattis vehicula, mi magna id. Mattis pulvinar scelerisque adipiscing; eros morbi vehicula.",
    url: "",
  },
  {
    img: Img,
    title: "Myers Cocktail",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis cras vehicula dapibus interdum lacinia finibus metus molestie. Orci netus fames erat maximus; erat himenaeos duis. Molestie nam tempus molestie efficitur urna egestas integer. Posuere ut maecenas class dolor mi, dis euismod lacinia. Ipsum rutrum accumsan curabitur pulvinar commodo fames quisque sapien.",
    url: "",
  },
  {
    img: Img,
    title: "Heavy Metal Chelation",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus finibus mus aptent etiam egestas sem. Enim facilisi eu congue conubia massa cubilia id dui. Nulla eu quisque et mauris curae urna. Vivamus donec egestas maecenas commodo himenaeos congue. Vitae dis proin quisque ante faucibus ridiculus. Metus turpis lacinia cursus himenaeos hendrerit lobortis.",
    url: "",
  },
  {
    img: Img,
    title: "B.Y.O.I.V.",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida eros aenean inceptos vehicula conubia donec venenatis. Enim fermentum natoque vitae netus sollicitudin consectetur ridiculus? Enim nibh hac cubilia porttitor mauris primis fusce fames mi. Etiam eleifend blandit pulvinar nibh tempor tellus fames. Lorem egestas curabitur ridiculus; mauris hac nostra.",
    url: "",
  },
];

const CocktailBarCom = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-full px-5">
      <div className="py-5 lg:py-20 pb-10 bg-[#D9E5DE] rounded-t-xl w-full ">
        <h1 className="text-[#062223] text-center font-bold text-3xl lg:text-5xl px-5 my-10">
          IV Cocktail Bar
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center text-start ">
          <div className="flex ">
            <div className="lg:w-[220px] lg:bg-[#fff] p-5 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 lg:border-2 border-[#0b5e62] rounded-xl lg:gap-[0.9rem] gap-x-2 gap-y-2 ">
              {options.map((option) => (
                <button
                  key={option.title}
                  className={`w-auto p-3 text-sm lg:text-lg text-nowrap rounded-full transition-colors duration-300 capitalize ${
                    selectedOption.title === option.title
                      ? "bg-[#0B5E62] text-white"
                      : "bg-white text-[#0B5E62] border border-[#A2C1C0]"
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="hidden md:hidden lg:block lg:mr-2">
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-[#0B5E62] relative mt-8"></div>
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-[#fff] absolute -mt-[2.5rem] -ml-1"></div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row bg-[#fff] border-2 border-[#90b6b5] rounded-xl  px-5 max-w-[1027px] mx-5">
            <div className="flex flex-col justify-center items-start lg:w-[60%] rounded-lg px-5 py-6">
              <h1 className="text-[#0B5E62] font-bold text-3xl pb-10 capitalize">
                {selectedOption.title}
              </h1>
              <p>{selectedOption.content}</p>
              <a href={selectedOption.url}>
                <button className="text-[#0B5E62] text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-[#0B5E62] rounded-full hover:bg-[#0B5E62] hover:text-white my-3">
                  Learn More
                </button>
              </a>
            </div>
            <div className="flex justify-center items-center my-10 mr-5 ">
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
