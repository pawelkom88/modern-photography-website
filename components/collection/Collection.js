import React from "react";
import { ThemeContext } from "context/ThemeMode";
import Image from "next/image";
import NavLink from "@components/header/link/NavLink";
import classes from "./collection.module.scss";

export default function Collection({ title, date, img, alt }) {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <section className={classes.collection}>
      <article className={classes.article}>
        <p className={classes.date}>{date}</p>
        <div>
          <h3 className={classes.heading}>{title}</h3>
          <NavLink className={`${darkMode ? "" : classes.light}`} href="/">
            Menu
          </NavLink>
        </div>
        <Image
          className={`${classes.img} ${classes.imgLeft} `}
          width={200}
          height={400}
          src={img}
          alt={alt}
        />
        <Image
          className={`${classes.img} ${classes.imgRight}`}
          width={200}
          height={400}
          src={img}
          alt={alt}
        />
      </article>
    </section>
  );
}
