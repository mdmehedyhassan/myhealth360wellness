import React from "react";

function ThemeSelectorCom({ themes, setTheme }) {
  return (
    <div className="bg-primary w-fit p-5 fixed top-[50%] left-0 -translate-x-16 hover:translate-x-0 rounded-r-xl transition-all ease-in-out duration-1000	z-50">
      {themes.map((t) => (
        <div
          key={t}
          onClick={() => setTheme(t)}
          className="cursor-pointer capitalize text-white"
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export default ThemeSelectorCom;
