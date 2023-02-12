import React from "react";
import useMatchMedia from "@hooks/useMatchMedia";
import { ThemeContext } from "context/ThemeMode";
import Image from "next/image";
import NavLink from "@components/header/link/NavLink";
import { collection } from "../../utils/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classes from "./collection.module.scss";

export default function Collection({ title, date, alt }) {
  const { matches } = useMatchMedia("(max-width: 800px)");

  const { darkMode } = React.useContext(ThemeContext);
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const triggerRef = React.useRef();

  const rensponsivnessW = matches ? 350 : 550;

  const rensponsivnessH = matches ? 500 : 700;

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerEl = triggerRef.current;
    const el1 = ref1.current;
    const el2 = ref2.current;

    gsap.fromTo(
      el1,
      { x: -10, rotate: -5 },
      {
        x: matches ? -300 : -800,
        scrollTrigger: {
          trigger: triggerEl,
          markers: true,
          start: "top 50%",
          end: "+=100 50%",
          scrub: 3,
          // pin: true,
        },
      }
    );
    gsap.fromTo(
      el2,
      { x: 10, rotate: 5 },
      {
        x: matches ? 300 : 800,
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 50%",
          end: "+=100 50%",
          scrub: 3,
          // pin: true,
        },
      }
    );

    // return () => {
    // };
  }, []);

  return (
    <section ref={triggerRef} className={classes.collection}>
      <article className={classes.article}>
        <p className={classes.date}>{date}</p>
        <div>
          <h3 className={classes.heading}>{title}</h3>
          <NavLink className={`${classes.btn} ${darkMode ? "" : classes.light}`} href="/">
            See case study
          </NavLink>
        </div>
        <Image
          ref={ref1}
          className={`${classes.img} ${classes.imgLeft}`}
          width={rensponsivnessW}
          height={rensponsivnessH}
          src={collection.mini1}
          alt="asd"
        />
        <Image
          ref={ref2}
          className={`${classes.img} ${classes.imgRight}`}
          width={rensponsivnessW}
          height={rensponsivnessH}
          src={collection.mini2}
          alt={alt}
        />
      </article>
    </section>
  );
}
