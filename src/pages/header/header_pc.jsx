import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { useState, useEffect } from "react";

export default function HeaderPC() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark');
    }
    else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="bg-white lg:bg-transparent dark:bg-[#111111] dark:lg:bg-[#252527] container top-0 left-0 right-0 z-[9999] h-[120px] flex justify-end items-center block px-6">
      <button className="text-xl text-black dark:text-white rounded-[100em] w-[50px] h-[50px] bg-white dark:bg-[#4D4D4D] shadow-black shadow-sm" onClick={() => setDarkMode((current) => !current)}>
        <FontAwesomeIcon icon={faMoon} className={classnames("", !darkMode && "hidden")} />
        <FontAwesomeIcon icon={faSun} className={classnames("", darkMode && "hidden")} />
      </button>
    </div>
  );
}
