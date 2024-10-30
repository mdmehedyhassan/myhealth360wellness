import React, { useState } from "react";
import faceImg from "../../../img/Home/face.svg";
import { Dot } from "lucide-react";

const options = [
  {
    title: "face",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
  {
    title: "neck",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
  {
    title: "body",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
  {
    title: "hair loss",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
  {
    title: "sexual wellness",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
  {
    title: "chronic pain",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
      },
      {
        id: 2,
        title: "upper third",
        content: "",
      },
      {
        id: 3,
        title: "middle third",
        content: "",
      },
      {
        id: 4,
        title: "lower third",
        content: "",
      },
    ],
  },
];

const TreatmentCom = () => {
  const date = new Date();
  const getMinutes = date.getMinutes();
  const getSeconds = date.getSeconds();
  console.log("Reloaded At", getMinutes, getSeconds);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="py-10 pb-32 bg-[#D9E5DE] mx-5 rounded-xl">
      <h1 className="text-[#062223] text-center font-bold text-3xl lg:text-5xl px-5 my-10">
        What Concerns Would You Like To Address?
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-start items-start max-h-[515px]">
          <div className="bg-[#fff] p-8 grid grid-col-1 border-2  border-[#0B5E62] rounded-lg gap-5 ">
            {options.map((option) => (
              <button
                key={option.title}
                className={`h-[54px] w-[172px] rounded-full mr-2 transition-colors duration-300 capitalize ${
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
          <div className="relative mr-10">
            <div className="bg-white w-10 h-10 border-2 border-[#0B5E62] rounded-lg rotate-45 absolute top-10 -left-6 mr-2"></div>
            <div className="bg-white w-10 h-16 rounded-lg absolute top-7 left-[-2.6rem] z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-[#fff] border-2 border-[#0B5E62] rounded-lg px-5 max-w-[1027px] max-h-[515px]">
          <div className="rounded-lg py-6">
            <h1 className="text-[#0B5E62] font-bold text-3xl pb-10 pl-5 capitalize">
              {selectedOption.title}
            </h1>
            {selectedOption.accordionData.map((item) => (
              <div
                key={item.id}
                className="mb-2 border-[#0B5E62] rounded-lg pl-5 pr-10"
              >
                <div className="collapse collapse-arrow bg-[#D9E5DE]">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    defaultChecked={item.title === "overall"}
                  />
                  <div className="text-black flex justify-start items-center collapse-title text-xl font-medium capitalize">
                    <Dot /> {item.title} {selectedOption.title === "face"}
                  </div>
                  <div className="collapse-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img
              className="rounded-xl "
              src={selectedOption.img}
              alt={selectedOption.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCom;
