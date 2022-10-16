import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

export default function Navbar(page) {
  return (
    <header class="lg:w-fit h-fit hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
      <nav class="hidden lg:block">
        <ul class="flex gap-3.5">
          <li>
            {" "}
            <a className={classnames("menu-item", page.page === "about" && "menu-active")} href="/">
              <span class="text-xl mb-1">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              About{" "}
            </a>
          </li>
          <li>
            {" "}
            <a className={classnames("menu-item", page.page === "projects" && "menu-active")} href="/">
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
