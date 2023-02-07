import React from "react";
import classes from "./links.module.scss";

export default function Links({ children, styles }) {
  return (
    <nav className={classes.nav}>
      <ul className={`${classes["nav-links"]} ${classes[styles]}`}>{children}</ul>
    </nav>
  );
}
