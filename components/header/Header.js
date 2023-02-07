import React from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import Links from "./links/Links";
import NavLink from "./link/NavLink";
import classes from "./header.module.scss";
import Link from "next/link";

export default function Header({ isOpen, onOpen }) {
  const { matches } = useMatchMedia("(max-width: 860px)");

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        {!matches && (
          <Links styles="flex-start">
            <NavLink href="/about">Offer</NavLink>
            <NavLink href="/about">Portfolio</NavLink>
            <NavLink href="/about">About</NavLink>
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
              <NavLink href="/about">Instagram</NavLink>
              <NavLink href="/about">Email</NavLink>
              <NavLink href="/about">Theme</NavLink>
            </>
          ) : (
            <>
              <NavLink href="/about">Theme</NavLink>
              <NavLink type="button" onClick={onOpen}>
                Menu
              </NavLink>
            </>
          )}
        </Links>
      </div>
    </header>
  );
}
