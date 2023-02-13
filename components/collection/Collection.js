import React from "react";
import useMatchMedia from "@hooks/useMatchMedia";
import { ThemeContext } from "context/ThemeMode";
import Image from "next/image";
import NavLink from "@components/header/link/NavLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classes from "./collection.module.scss";

export default function Collection({ title, date, place, img1, img2, alt }) {
  const { matches } = useMatchMedia("(max-width: 800px)");

  const { darkMode } = React.useContext(ThemeContext);
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const triggerRef = React.useRef();

  const rensponsivnessW = matches ? 299 : 558;

  const rensponsivnessH = matches ? 531 : 711;

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerEl = triggerRef.current;
    const el1 = ref1.current;
    const el2 = ref2.current;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        el1,
        { x: -10, rotate: -5 },
        {
          x: matches ? -320 : -800,
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 50%",
            end: "+=100",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        el2,
        { x: 10, rotate: 5 },
        {
          x: matches ? 320 : 800,
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 50%",
            end: "+=100",
            scrub: 3,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, [matches]);

  return (
    <section ref={triggerRef} className={classes.collection}>
      <article className={classes.article}>
        <div className={classes.top}>
          <p className={classes.date}>{date}</p>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z"
              fill="currentcolor"></path>
          </svg>
          <p className={classes.date}>{place}</p>
        </div>
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
          src={img1}
          alt={alt}
        />
        <Image
          ref={ref2}
          className={`${classes.img} ${classes.imgRight}`}
          width={rensponsivnessW}
          height={rensponsivnessH}
          src={img2}
          alt={alt}
        />
      </article>
    </section>
  );
}
