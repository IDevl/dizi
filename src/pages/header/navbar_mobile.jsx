import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames';

export default function NavbarMobile(page) {
  console.log(page)
  return (
    <nav id="navbar" class="lg:hidden">
      <ul class="block rounded-b-[20px] shadow-md absolute left-0 top-20 w-full bg-[#1d1d1d]">
        <li>
          <a className={classnames("mobile-menu-items", page.page.page === "about" && "mobile-menu-items-active")} href="./">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            About
          </a>
          <a className={classnames("mobile-menu-items", page.page.page === "resume" && "mobile-menu-items-active")} href="./">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faFileLines} />
            </span>{" "}
            Resume
          </a>
          <a className={classnames("mobile-menu-items", page.page.page === "projects" && "mobile-menu-items-active")} href="./">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>{" "}
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
