import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

export default function Navbar(page) {

  console.log(`${process.env.REACT_APP_SUB_URL}/`);

  return (
    <header class="lg:w-fit h-fit hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
      <nav class="hidden lg:block">
        <ul class="flex gap-3.5">
          <li>
            {" "}
            <a className={classnames("menu-item", page.page === `${process.env.REACT_APP_SUB_URL}/` && "menu-active")} href="/">
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              About{" "}
            </a>
          </li>
          <li>
            {" "}
            <a className={classnames("menu-item", page.page === `${process.env.REACT_APP_SUB_URL}/resume` && "menu-active")} href="/resume">
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faFileLines} />
              </span>{" "}
              Resume{" "}
            </a>
          </li>
          <li>
            {" "}
            <a className={classnames("menu-item", page.page === `${process.env.REACT_APP_SUB_URL}/projects` && "menu-active")} href="/projects">
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>{" "}
              Projects{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
