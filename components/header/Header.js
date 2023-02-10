import useMatchMedia from "../../hooks/useMatchMedia";
import Links from "./links/Links";
import NavLink from "./link/NavLink";
import classes from "./header.module.scss";
import Link from "next/link";
import { linksLeft, linksRightDesktop } from "../../utils/utils";

export default function Header({ isOpen, onOpen, darkMode, toggleTheme }) {
  const { matches } = useMatchMedia("(max-width: 860px)");

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        {!matches && (
          <Links styles="flex-start">
            {linksLeft?.map(({ id, href, content }) => (
              <NavLink className={`${darkMode ? "" : classes.light}`} key={id} href={href}>
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
                <NavLink className={`${darkMode ? "" : classes.light}`} key={id} href={href}>
                  {content}
                </NavLink>
              ))}
            </>
          ) : (
            <>
              <NavLink
                className={`${darkMode ? "" : classes.light}`}
                type="button"
                onClick={onOpen}>
                Menu
              </NavLink>
            </>
          )}

          <NavLink
            className={`${darkMode ? "" : classes.light}`}
            type="button"
            onClick={toggleTheme}>
            {darkMode ? "light mode" : "dark mode"}
          </NavLink>
        </Links>
      </div>
    </header>
  );
}

// {darkMode ? "light-mode" : "dark-mode"}
