import useMatchMedia from "../../hooks/useMatchMedia";
import Switcher from "@components/switcher/Switcher";
import Links from "./links/Links";
import NavLink from "./link/NavLink";
import React from "react";
import { ThemeContext } from "context/ThemeMode";
import Link from "next/link";
import { linksLeft, linksRightDesktop } from "../../utils/utils";
import classes from "./header.module.scss";

export default function Header({ onOpen }) {
  const { matches } = useMatchMedia("(max-width: 860px)");
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        {!matches && (
          <Links styles="flex-start">
            {linksLeft?.map(({ id, href, content }) => (
              <NavLink key={id} href={href}>
                {content}
              </NavLink>
            ))}
          </Links>
        )}
        <Link href="/">
          <h1 style={{ flex: !matches ? 1 : 0 }} className={classes.heading}>
            Giulia
          </h1>
        </Link>

        <Links styles="flex-end">
          {!matches ? (
            <>
              {linksRightDesktop?.map(({ id, href, content }) => (
                <NavLink key={id} href={href}>
                  {content}
                </NavLink>
              ))}
            </>
          ) : (
            <>
              <NavLink type="button" onClick={onOpen}>
                Menu
              </NavLink>
            </>
          )}
          <Switcher onChange={toggleTheme} value={darkMode} />
        </Links>
      </div>
    </header>
  );
}
