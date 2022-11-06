import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

export default function HeaderMobile() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] block lg:hidden">
      <div className="w-full flex items-center justify-center gap-[1.2em] px-4 py-5 bg-white dark:bg-black drop-shadow-[0_-2.5px_5px_rgba(0,0,0,0.1)]">
        <Link className={classnames("menu-item text-[1.1rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]", location.pathname === "/" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")} to="./">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faUser} className="flex items-center justify-center"/>
          </span>{" "}
        </Link>
        <Link className={classnames("menu-item text-[1.2rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]", location.pathname === "/resume" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")} to="./resume">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faFileLines} className="flex items-center justify-center"/>
          </span>{" "}
        </Link>
        <Link className={classnames("menu-item text-[1.2rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]", location.pathname === "/projects" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")} to="./projects">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faBriefcase} className="flex items-center justify-center"/>
          </span>{" "}
        </Link>
        <Link className={classnames("menu-item text-[1.2rem] text-black dark:hover:text-[white] dark:text-[white] bg-[#F3F6F6] hover:bg-[#F4C9A5] dark:bg-[#1D1D1D] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]", location.pathname === "/certificates" && "bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] shadow-none")} to="./certificates">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faCertificate} className="flex items-center justify-center"/>
          </span>{" "}
        </Link>
      </div>
    </div>
  );
}
