import React, { useRef, useState } from "react";
import Logo from "@/assets/Logo";
import style from "./styles.module.scss";
import useClickOutside from "@/utils/useClickOutside";
import joinClass from "@/utils/joinClass";
import NavMenu from "../NavMenu";

export default function Header<T>(): JSX.Element {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const navButtonClass = navOpen
    ? joinClass(style.menuToggle, style.toggleOpen)
    : style.menuToggle;

  const headerStyle = navOpen
    ? joinClass(style.header, style.toggleOpen)
    : style.header;

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  useClickOutside(navbarRef, () => setNavOpen(false));

  return (
    <header className={headerStyle}>
      <a href="/">
        <Logo />
      </a>
      <button
        aria-controls="nav-menu"
        className={navButtonClass}
        onClick={handleNavClick}
      ></button>
      <NavMenu id="nav-menu" show={navOpen} />
    </header>
  );
}
