import React, { useRef, useState } from "react";
import Logo from "@/assets/Logo";
import style from "./styles.module.scss";
import useClickOutside from "@/utils/useClickOutside";
import joinClass from "@/utils/joinClass";
import NavMenu from "../NavMenu";

export default function Header<T>(): JSX.Element {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLButtonElement>(null);

  const navButtonClass = navOpen
    ? joinClass(style.menuToggle, style.toggleOpen)
    : style.menuToggle;

  const headerStyle = navOpen
    ? joinClass(style.header, style.toggleOpen)
    : style.header;

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  useClickOutside(navbarRef, () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 200);
  });

  return (
    <header className={headerStyle}>
      <a href="#about">
        <Logo />
      </a>
      <button
        ref={navbarRef}
        className={navButtonClass}
        onClick={handleNavClick}
      ></button>
      <NavMenu id="nav-menu" show={navOpen} />
    </header>
  );
}
