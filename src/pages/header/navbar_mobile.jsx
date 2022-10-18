import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames';
import { Link, useLocation } from "react-router-dom";

export default function NavbarMobile() {

  const location = useLocation();

  return (
    <nav id="navbar" class="lg:hidden">
      <ul class="block rounded-b-[20px] shadow-md absolute left-0 top-20 w-full bg-[#1d1d1d]">
        <li>
          <Link className={classnames("mobile-menu-items", location.pathname === "/" && "mobile-menu-items-active")} to="./">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            About
          </Link>
          <Link className={classnames("mobile-menu-items", location.pathname === "/resume" && "mobile-menu-items-active")} to="./resume">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faFileLines} />
            </span>{" "}
            Resume
          </Link>
          <Link className={classnames("mobile-menu-items", location.pathname === "/projects" && "mobile-menu-items-active")} to="./projects">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>{" "}
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
