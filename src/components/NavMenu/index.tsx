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
        <li>About</li>
        <li>My Career</li>
        <li>Contact</li>
      </ul>
      {/* <div className="basicDet">
        <span>Say Hello</span>
      </div> */}
    </nav>
  );
}
