import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faCertificate, faBlog } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function HeaderMobile() {
  const location = useLocation();

  const [scrollDown, setScrollDown] = useState(false);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 100 && !scrollDown) {
        setScrollDown(true);
        document.getElementById("nav-mobile").style.transform = "translateY(96px)";
      }
      if (prevScrollY.current > currentScrollY && currentScrollY > 100 && scrollDown) {
        setScrollDown(false);
        document.getElementById("nav-mobile").style.transform = "translateY(0px)";
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDown]);

  return (
    <div id="nav-mobile" className="fixed bottom-0 left-0 right-0 z-[9999] block lg:hidden duration-[0.1s]">
      <div className="w-full flex items-center justify-center gap-[0.5em] p-3 bg-white dark:bg-black drop-shadow-[0_-2.5px_5px_rgba(0,0,0,0.1)]">
        <Link className={classnames("menu-item text-[1rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none", location.pathname === "/" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")} to="./">
          <span className="text-[1rem] mb-1">
            <FontAwesomeIcon icon={faUser} className="flex items-center justify-center" />
          </span>{"About"}
        </Link>
        <Link
          className={classnames("menu-item text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none", location.pathname === "/resume" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")}
          to="./resume"
        >
          <span className="text-[1rem] mb-1">
            <FontAwesomeIcon icon={faFileLines} className="flex items-center justify-center" />
          </span>{"Resume"}
        </Link>
        <Link
          className={classnames("menu-item text-[1rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none", location.pathname === "/projects" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")}
          to="./projects"
        >
          <span className="text-[1rem] mb-1">
            <FontAwesomeIcon icon={faBriefcase} className="flex items-center justify-center" />
          </span>{"Projects"}
        </Link>
        <Link
          className={classnames("menu-item text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none", location.pathname === "/certificates" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")}
          to="./certificates"
        >
          <span className="text-[1rem] mb-1">
            <FontAwesomeIcon icon={faCertificate} className="flex items-center justify-center" />
          </span>{"Certificates"}
        </Link>
        <Link
          className={classnames("menu-item text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none", location.pathname.indexOf("/blogs") === 0 && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")}
          to="./blogs"
        >
          <span className="text-[1rem] mb-1">
            <FontAwesomeIcon icon={faBlog} className="flex items-center justify-center" />
          </span>{"Blogs"}
        </Link>
      </div>
    </div>
  );
}
