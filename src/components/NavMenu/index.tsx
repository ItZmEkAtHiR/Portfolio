import React from "react";
import styles from "./styles.module.scss";
import joinClass from "@/utils/joinClass";

interface Iprops {
  id: string;
  show: boolean;
}
export default function NavMenu({ id, show }: Iprops): JSX.Element {
  const navStyles = show
    ? joinClass(styles.contextMenu, styles.show)
    : styles.contextMenu;
  const siteNavStyles = show
    ? joinClass(styles.siteNav, styles.show)
    : styles.siteNav;
  return (
    <nav id={id} className={navStyles}>
      <ul className={siteNavStyles}>
        <a href="#about">
          <li>About</li>
        </a>
        <li>My Career</li>
        <a href="#home">
          <li>Contact</li>
        </a>
      </ul>
      {/* <div className="basicDet">
        <span>Say Hello</span>
      </div> */}
    </nav>
  );
}
