import React, { useEffect, useState } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";

function ThemeSelectorCom({ setTheme }) {
  const [custom, setCustom] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  useEffect(() => {
    // Initialize colors from CSS variables
    setPrimaryColor(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim()
    );
    setSecondaryColor(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-secondary")
        .trim()
    );
  }, []);

  const updateColorVariable = (colorName, colorValue) => {
    document.documentElement.style.setProperty(colorName, colorValue);
  };

  const handlePrimaryColorChange = (e) => {
    const newColor = e.target.value;
    setPrimaryColor(newColor);
    updateColorVariable("--color-primary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };

  const handleSecondaryColorChange = (e) => {
    const newColor = e.target.value;
    setSecondaryColor(newColor);
    updateColorVariable("--color-secondary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handelCustomColorButton = () => {
    setCustom((prevCustom) => {
      const newCustomState = !prevCustom;

      if (!newCustomState) {
        // Reset to default values when custom is false
        const defaultPrimary = "#0b5e62";
        const defaultSecondary = "#e5c466";
        setPrimaryColor(defaultPrimary);
        setSecondaryColor(defaultSecondary);
        updateColorVariable("--color-primary", defaultPrimary);
        updateColorVariable("--color-secondary", defaultSecondary);
      }

      return newCustomState;
    });
  };

  return (
    <div className="bg-primary w-fit p-5 fixed top-[50%] left-0 -translate-x-44 hover:translate-x-0 transition-all duration-500 ease-in-out rounded-r-xl z-50">
      <div className="">
        {/* Color Card 1  Start*/}
        <div
          onClick={() => setTheme("base")}
          className="cursor-pointer text-white mt-2 bg-[#ffffff76]  my-2 gap-1 hover:bg-white p-2 rounded-full transition-all duration-500 ease-in-out"
        >
          <div className="bg-secondary w-full rounded-full grid grid-cols-2 items-center">
            <div className="h-5 bg-[#0b5e62] rounded-s-full"></div>
            <div className="h-5 bg-[#e5c466] rounded-e-full"></div>
          </div>
        </div>
        {/* Color Card 1  End*/}
        {/* Color Card 2  Start*/}
        <div
          onClick={() => setTheme("pink")}
          className="cursor-pointer text-white mt-2 bg-[#ffffff76]  my-2 gap-1 hover:bg-white p-2 rounded-full transition-all duration-500 ease-in-out"
        >
          <div className="bg-secondary w-full rounded-full grid grid-cols-2 items-center">
            <div className="h-5 bg-[#875dbb] rounded-s-full"></div>
            <div className="h-5 bg-[#ec488b] rounded-e-full"></div>
          </div>
        </div>
        {/* Color Card 2  End*/}
      </div>
      <button
        onClick={handelCustomColorButton}
        className="bg-primaryAccent text-white w-36 py-2 rounded-full flex justify-center items-center gap-1"
      >
        {custom === false ? <FaPlus /> : <FaXmark />}
        <div> {custom === false ? "Add Color" : "Remove Color"}</div>
      </button>
      <div
        className={`${
          custom === true ? "block" : "hidden"
        } my-2 transition-all duration-500 ease-in-out`}
      >
        <div className="mb-3 ">
          <label className="text-white block mb-1">Primary Color:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={primaryColor}
              onChange={handlePrimaryColorChange}
              className="w-full cursor-pointer "
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Secondary Color:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={secondaryColor}
              onChange={handleSecondaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectorCom;
