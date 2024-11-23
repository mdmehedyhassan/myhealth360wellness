import React, { useEffect, useState } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";

function ThemeSelectorCom({ setTheme }) {
  const [custom, setCustom] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [primaryAccent, setPrimaryAccent] = useState("");
  const [bgPrimary, setBgPrimary] = useState("");
  const [bgSecondary, setBgSecondary] = useState("");
  const [textPrimary, setTextPrimary] = useState("");
  const [textSecondary, setTextSecondary] = useState("");
  const [borderPrimary, setBorderPrimary] = useState("");

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
    setPrimaryAccent(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary-accent")
        .trim()
    );
    setBgPrimary(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-primary")
        .trim()
    );
    setBgSecondary(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-secondary")
        .trim()
    );
    setTextPrimary(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-primary")
        .trim()
    );
    setTextSecondary(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-secondary")
        .trim()
    );
    setBorderPrimary(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-border-primary")
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
  const handlePrimaryAccentColorChange = (e) => {
    const newColor = e.target.value;
    setPrimaryAccent(newColor);
    updateColorVariable("--color-primary-accent", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handleBgPrimaryColorChange = (e) => {
    const newColor = e.target.value;
    setBgPrimary(newColor);
    updateColorVariable("--color-bg-primary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handleBgSecondaryColorChange = (e) => {
    const newColor = e.target.value;
    setBgSecondary(newColor);
    updateColorVariable("--color-bg-secondary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handleTextPrimaryColorChange = (e) => {
    const newColor = e.target.value;
    setTextPrimary(newColor);
    updateColorVariable("--color-text-primary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handleTextSecondaryColorChange = (e) => {
    const newColor = e.target.value;
    setTextSecondary(newColor);
    updateColorVariable("--color-text-secondary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handleBorderPrimaryColorChange = (e) => {
    const newColor = e.target.value;
    setBorderPrimary(newColor);
    updateColorVariable("--color-border-primary", newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };
  const handelCustomColorButton = () => {
    setCustom((prevCustom) => {
      const newCustomState = !prevCustom;

      if (!newCustomState) {
        // Reset to default values when custom is false
        const defaultPrimary = "#0b5e62";
        const defaultSecondary = "#e5c466";
        const defaultPrimaryAccent = "#010505";
        const defaultBgPrimary = "#E9F0EC";
        const defaultBgSecondary = "#D9E5DE";
        const defaultTextPrimary = "#062223";
        const defaultTextSecondary = "#485657";
        const defaultBorderPrimary = "#e5c466";
        setPrimaryColor(defaultPrimary);
        setSecondaryColor(defaultSecondary);
        setPrimaryAccent(defaultPrimaryAccent);
        setBgPrimary(defaultBgPrimary);
        setBgSecondary(defaultBgSecondary);
        setTextPrimary(defaultTextPrimary);
        setTextSecondary(defaultTextSecondary);
        setBorderPrimary(defaultBorderPrimary);
        updateColorVariable("--color-primary", defaultPrimary);
        updateColorVariable("--color-secondary", defaultSecondary);
        updateColorVariable("--color-primary-accent", defaultPrimaryAccent);
        updateColorVariable("--color-bg-primary", defaultBgPrimary);
        updateColorVariable("--color-bg-secondary", defaultBgSecondary);
        updateColorVariable("--color-text-primary", defaultTextPrimary);
        updateColorVariable("--color-text-secondary", defaultTextSecondary);
        updateColorVariable("--color-border-primary", defaultBorderPrimary);
      }
      return newCustomState;
    });
  };

  return (
    <div className="bg-primary w-fit p-5 fixed top-[25%] left-0 -translate-x-44 hover:translate-x-0 transition-all duration-500 ease-in-out rounded-r-xl z-50">
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

        <div className="mb-3">
          <label className="text-white block mb-1">Primary Accent:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={primaryAccent}
              onChange={handlePrimaryAccentColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Background Primary:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={bgPrimary}
              onChange={handleBgPrimaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Background Secondary </label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={bgSecondary}
              onChange={handleBgSecondaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Text Primary:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={textPrimary}
              onChange={handleTextPrimaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Text Secondary:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={textSecondary}
              onChange={handleTextSecondaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-white block mb-1">Border Primary:</label>
          <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
            <input
              type="color"
              value={borderPrimary}
              onChange={handleBorderPrimaryColorChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectorCom;
