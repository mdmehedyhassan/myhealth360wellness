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
    // Load colors from localStorage or fallback to CSS variables
    const savedColors = JSON.parse(localStorage.getItem("themeColors")) || {};
    const defaultColors = {
      "--color-primary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim(),
      "--color-secondary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-secondary")
        .trim(),
      "--color-primary-accent": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary-accent")
        .trim(),
      "--color-bg-primary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-primary")
        .trim(),
      "--color-bg-secondary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-secondary")
        .trim(),
      "--color-text-primary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-primary")
        .trim(),
      "--color-text-secondary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-secondary")
        .trim(),
      "--color-border-primary": getComputedStyle(document.documentElement)
        .getPropertyValue("--color-border-primary")
        .trim(),
    };

    const colorsToApply = { ...defaultColors, ...savedColors };
    Object.keys(colorsToApply).forEach((key) =>
      document.documentElement.style.setProperty(key, colorsToApply[key])
    );

    setPrimaryColor(colorsToApply["--color-primary"]);
    setSecondaryColor(colorsToApply["--color-secondary"]);
    setPrimaryAccent(colorsToApply["--color-primary-accent"]);
    setBgPrimary(colorsToApply["--color-bg-primary"]);
    setBgSecondary(colorsToApply["--color-bg-secondary"]);
    setTextPrimary(colorsToApply["--color-text-primary"]);
    setTextSecondary(colorsToApply["--color-text-secondary"]);
    setBorderPrimary(colorsToApply["--color-border-primary"]);
  }, []);

  const updateColorVariable = (colorName, colorValue) => {
    document.documentElement.style.setProperty(colorName, colorValue);
    const savedColors = JSON.parse(localStorage.getItem("themeColors")) || {};
    savedColors[colorName] = colorValue;
    localStorage.setItem("themeColors", JSON.stringify(savedColors));
  };

  const handleColorChange = (setter, colorName) => (e) => {
    const newColor = e.target.value;
    setter(newColor);
    updateColorVariable(colorName, newColor);
    setTheme((prev) => prev + "-"); // Force React state update
  };

  const handleCustomColorButton = () => {
    setCustom((prevCustom) => {
      const newCustomState = !prevCustom;

      if (!newCustomState) {
        // Reset to default values and clear localStorage
        localStorage.removeItem("themeColors");
        window.location.reload();
      }

      return newCustomState;
    });
  };

  return (
    <div className="bg-primary w-[206px] p-5 fixed top-[25%] left-0 -translate-x-48  hover:translate-x-0 transition-all duration-500 ease-in-out rounded-r-xl z-50">
      <div>
        {/* Predefined themes */}
        <div
          onClick={() => setTheme("base")}
          className="cursor-pointer text-white mt-2 bg-[#ffffff76] my-2 gap-1 hover:bg-white p-2 rounded-full transition-all duration-500 ease-in-out"
        >
          <div className="bg-secondary w-full rounded-full grid grid-cols-2 items-center">
            <div className="h-5 bg-[#0b5e62] rounded-s-full"></div>
            <div className="h-5 bg-[#e5c466] rounded-e-full"></div>
          </div>
        </div>
        <div
          onClick={() => setTheme("pink")}
          className="cursor-pointer text-white mt-2 bg-[#ffffff76] my-2 gap-1 hover:bg-white p-2 rounded-full transition-all duration-500 ease-in-out"
        >
          <div className="bg-secondary w-full rounded-full grid grid-cols-2 items-center">
            <div className="h-5 bg-[#875dbb] rounded-s-full"></div>
            <div className="h-5 bg-[#ec488b] rounded-e-full"></div>
          </div>
        </div>
      </div>

      {/* Custom Colors */}
      <button
        onClick={handleCustomColorButton}
        className="bg-primaryAccent text-white w-36 py-2 rounded-full flex justify-center items-center gap-1"
      >
        {custom === false ? <FaPlus /> : <FaXmark />}
        <div> {custom === false ? "Add Color" : "Remove Color"}</div>
      </button>
      <div
        className={`${
          custom ? "block" : "hidden"
        } my-2 transition-all duration-500 ease-in-out`}
      >
        {[
          {
            label: "Primary Color",
            value: primaryColor,
            handler: setPrimaryColor,
            cssVar: "--color-primary",
          },
          {
            label: "Secondary Color",
            value: secondaryColor,
            handler: setSecondaryColor,
            cssVar: "--color-secondary",
          },
          {
            label: "Primary Accent",
            value: primaryAccent,
            handler: setPrimaryAccent,
            cssVar: "--color-primary-accent",
          },
          {
            label: "Background Primary",
            value: bgPrimary,
            handler: setBgPrimary,
            cssVar: "--color-bg-primary",
          },
          {
            label: "Background Secondary",
            value: bgSecondary,
            handler: setBgSecondary,
            cssVar: "--color-bg-secondary",
          },
          {
            label: "Text Primary",
            value: textPrimary,
            handler: setTextPrimary,
            cssVar: "--color-text-primary",
          },
          {
            label: "Text Secondary",
            value: textSecondary,
            handler: setTextSecondary,
            cssVar: "--color-text-secondary",
          },
          {
            label: "Border Primary",
            value: borderPrimary,
            handler: setBorderPrimary,
            cssVar: "--color-border-primary",
          },
        ].map(({ label, value, handler, cssVar }) => (
          <div key={cssVar} className="mb-3">
            <label className="text-white block mb-1">{label}:</label>
            <div className="bg-[#ffffff76] hover:bg-white w-full p-2 transition-all duration-500 ease-in-out">
              <input
                type="color"
                value={value}
                onChange={handleColorChange(handler, cssVar)}
                className="w-full cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelectorCom;
