import React from "react";
import Link from "next/link";
import classes from "./navlink.module.scss";

export default function NavLink({ children, href, type, onClick, className }) {
  let LINK;

  if (type === "button") {
    LINK = (
      <button className={`${classes.link} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    LINK = (
      <Link className={`${classes.link} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return <li>{LINK}</li>;
}
