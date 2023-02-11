import React from "react";
import { ThemeContext } from "context/ThemeMode";
import Link from "next/link";
import classes from "./navlink.module.scss";

export default function NavLink({ children, href, type, onClick, className }) {
  const { darkMode } = React.useContext(ThemeContext);

  const themeMode = `${darkMode ? "" : classes.light}`;

  let LINK;

  if (type === "button") {
    LINK = (
      <button className={`${classes.link} ${themeMode} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    LINK = (
      <Link className={`${classes.link} ${themeMode} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return <li>{LINK}</li>;
}
