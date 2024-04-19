import { useContext, useState } from "react";
import { DarkThemeIcon, LightThemeIcon } from "./icons.jsx";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeIcon(props) {
  const {themeName, HandleTheme} = useContext(ThemeContext);
  

  // function HandleTheme() {
  //   setThemeName((prev) => {
  //     const themeInfo = prev === "light" ? "dark" : "light";
  //     document.documentElement.setAttribute("data-bs-theme", themeInfo);
  //     return themeInfo;
  //   });
  // }

  return (
    <>
      {themeName === "light" ? (
        <button className="btn" onClick={HandleTheme}>
          {LightThemeIcon} Light
        </button>
      ) : (
        <button className="btn" onClick={HandleTheme}>
          {DarkThemeIcon} Dark
        </button>
      )}
    </>
  );
}
