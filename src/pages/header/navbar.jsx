import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const refreshPage = () => {
    navigate(0);
  };
  return (
    <header class="lg:w-fit h-fit hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
      <nav class="hidden lg:block">
        <ul class="flex gap-3.5">
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/" && "menu-active")} to="./" onClick={refreshPage}>
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              About{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/resume" && "menu-active")} to="./resume" onClick={refreshPage}>
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faFileLines} />
              </span>{" "}
              Resume{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className={classnames("menu-item", location.pathname === "/projects" && "menu-active")} to="./projects" onClick={refreshPage}>
              <span class="text-xl mb-1">
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
