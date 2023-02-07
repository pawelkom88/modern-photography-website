import React from "react";
import classes from "./navlink.module.scss";
import Link from "next/link";

export default function NavLink({ children, href, type, onClick }) {
  let LINK;

  if (type === "button") {
    LINK = (
      <button className={classes.link} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    LINK = (
      <Link className={classes.link} href={href}>
        {children}
      </Link>
    );
  }

  return <li>{LINK}</li>;
}
