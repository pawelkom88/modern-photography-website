import React from "react";
import { ThemeContext } from "context/ThemeMode";
import NavLink from "@components/header/link/NavLink";
import { info } from "../../utils/utils";
import classes from "./footer.module.scss";

export default function Footer() {
  const { darkMode } = React.useContext(ThemeContext);

  const themeMode = `${darkMode ? "" : classes.light}`;

  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <span>GET IN TOUCH</span>
        <h4 className={`${classes.email} ${themeMode}`}>
          <a href="mailto:contact@wp.pl">PHOTO@GIULIAGARTNER.COM</a>
        </h4>
      </div>

      <div className={classes.info}>
        <div>giulia gartner 2022</div>
        <div className={classes.links}>
          {info?.map(({ id, href, content }) => (
            <NavLink className={themeMode} key={id} href={href}>
              {content}
            </NavLink>
          ))}
        </div>
        <div>developed by: Paw</div>
      </div>
    </footer>
  );
}
