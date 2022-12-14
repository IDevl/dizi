import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function HeaderPC() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.getElementById("favicon").href = "./img/logos/favicon-dark.ico";
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.getElementById("favicon").href = "./img/logos/favicon-light.ico";
    }
  }, [theme]);
  return (
    <div className="w-full bg-white lg:bg-transparent dark:bg-[#111111] dark:lg:bg-[#252527] lg:container top-0 left-0 right-0 z-[99999] h-[120px] flex justify-end items-center block px-6">
      <button className="flex items-center justify-center text-xl text-black dark:text-white rounded-[100em] w-[50px] h-[50px] bg-white dark:bg-[#4D4D4D] shadow-black shadow-sm z-[2]" onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}>
        <FontAwesomeIcon icon={faMoon} className="hidden dark:block" />
        <FontAwesomeIcon icon={faSun} className="block dark:hidden" />
      </button>
    </div>
  );
}
