import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";

export default function BackToTop() {
  const [scrollDown, setScrollDown] = useState(false);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 250 && !scrollDown) {
        setScrollDown(true);
        document.getElementById("backToTop-button").style.bottom = "1em";
      }
      if (prevScrollY.current > currentScrollY && scrollDown) {
        setScrollDown(false);
        document.getElementById("backToTop-button").style.bottom = "6em";
      }
      if (currentScrollY < 250) {
        document.getElementById("backToTop-button").style.opacity = "0";
        document.getElementById("backToTop-button").style.visibility = "hidden";
      } else {
        document.getElementById("backToTop-button").style.opacity = "1";
        document.getElementById("backToTop-button").style.visibility = "visible";
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDown]);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <button id="backToTop-button" class="block lg:hidden bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:bg-gradient-to-l dark:text-[white] from-[#df0000] to-[#550089] p-[4.5px_10px_4.5px_10px] fixed bottom-[6em] right-[1em] z-[9999] text-[1rem] rounded shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] invisible duration-[0.2s]" onClick={() => backToTop()}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </>
  );
}
