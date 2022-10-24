import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

export default function HeaderMobile() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] block lg:hidden">
      <div className="w-full flex items-center justify-center gap-[1.2em] px-4 py-5 bg-black">
        <Link className={classnames("menu-item", location.pathname === "/" && "menu-active")} to="./">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>{" "}
          About{" "}
        </Link>
        <Link className={classnames("menu-item", location.pathname === "/resume" && "menu-active")} to="./resume">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>{" "}
          Resume{" "}
        </Link>
        <Link className={classnames("menu-item", location.pathname === "/projects" && "menu-active")} to="./projects">
          <span className="text-md mb-1">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>{" "}
          Projects{" "}
        </Link>
      </div>
    </div>
  );
}
