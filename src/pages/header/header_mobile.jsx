import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavbarMobile from "./navbar_mobile";
import { useState } from "react";
import classnames from "classnames";
import logo from "../img/logo/logo.png";

export default function HeaderMobile(page) {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div class="sticky top-0 z-[9999] block lg:hidden">
      <div class="w-full flex items-center justify-between px-4 py-5 bg-black">
        <a class="rounded-xl bg-gradient-to-r from-[#df0000] to-[#550089] py-[6px] px-2.5" href="/">
          <img class="max-h-[25px] object-cover brightness-200" src={logo} alt="logo" />
        </a>
        <div class="flex items-center">
          <button onClick={() => setMenuToggle((current) => !current)} className={classnames("menu-toggle-btn", menuToggle && "menu-toggle-btn-active")}>
            <FontAwesomeIcon icon={faBars} id="burger-open" className={menuToggle ? "hidden" : ""} />
            <FontAwesomeIcon icon={faXmark} id="burger-close" className={!menuToggle ? "hidden" : ""} />
          </button>
        </div>
      </div>
      {menuToggle && <NavbarMobile page={page} />}
    </div>
  );
}
