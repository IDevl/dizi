import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import classnames from 'classnames';

export default function NavbarMobile(page) {

  console.log(`${process.env.REACT_APP_SUB_URL}/`);

  return (
    <nav id="navbar" class="lg:hidden">
      <ul class="block rounded-b-[20px] shadow-md absolute left-0 top-20 w-full bg-[#1d1d1d]">
        <li>
          <a className={classnames("mobile-menu-items", page.page.page === `${process.env.REACT_APP_SUB_URL}/` && "mobile-menu-items-active")} href="/">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            About
          </a>
          <a className={classnames("mobile-menu-items", page.page.page === `${process.env.REACT_APP_SUB_URL}/resume` && "mobile-menu-items-active")} href="/resume">
            <span class="mr-2 text-xl">
              <FontAwesomeIcon icon={faFileLines} />
            </span>{" "}
            Resume
          </a>
          <a className={classnames("mobile-menu-items", page.page.page === `${process.env.REACT_APP_SUB_URL}/projects` && "mobile-menu-items-active")} href="/projects">
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
