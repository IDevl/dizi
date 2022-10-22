import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  return (
    <header className="lg:w-fit h-fit hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex gap-3.5">
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/" && "menu-active")} to="./">
              <span className="text-xl mb-1">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              About{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/resume" && "menu-active")} to="./resume">
              <span className="text-xl mb-1">
                <FontAwesomeIcon icon={faFileLines} />
              </span>{" "}
              Resume{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/projects" && "menu-active")} to="./projects">
              <span className="text-xl mb-1">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>{" "}
              Projects{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
