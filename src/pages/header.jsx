import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <header class="lg:w-fit h-fit hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
        <nav class="hidden lg:block">
          <ul class="flex gap-3.5">
            <li>
              {" "}
              <a class="menu-active" href="/">
                <span class="text-xl mb-1">
                  <FontAwesomeIcon icon={faUser} />
                </span>{" "}
                About{" "}
              </a>
            </li>
            <li>
              {" "}
              <a class="menu-item" href="/">
                <span class="text-xl mb-1">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>{" "}
                Projects{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
