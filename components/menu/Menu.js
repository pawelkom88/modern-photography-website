import Link from "next/link";
import classes from "./menu.module.scss";
import { internalLinks, extrenalLinks } from "utils/utils";

export default function Menu({ isOpen, onOpen, darkMode }) {
  const linkAnimation = `${isOpen ? classes["links-in"] : classes["links-out"]}`;

  return (
    <div
      id="menu"
      className={`${classes.menu} ${isOpen ? classes["menu-open"] : ""} ${
        darkMode ? "dark-mode" : "light-mode"
      }`}>
      <div className={classes["menu-inner"]}>
        <div className={classes["menu-inner__nav"]}>
          {/* component */}

          <ul className={classes.links}>
            {internalLinks?.map(link => {
              return (
                <li className={linkAnimation} key={link.id}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* component */}
          <ul className={`${classes.icons} ${linkAnimation}`}>
            {extrenalLinks?.map(link => {
              return (
                <li key={link.id}>
                  <Link key={link.id} href={link.href}>
                    {link.img}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* component */}

      <button
        className={`${classes.btn} ${!darkMode ? "dark-mode" : "light-mode"}`}
        onClick={onOpen}>
        <svg
          className={`${isOpen && classes.open} `}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}
