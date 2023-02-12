import React from "react";
import { useInView } from "react-intersection-observer";
import Heading from "./heading/Heading";
import NavLink from "@components/header/link/NavLink";
import { aboutImages } from "../../utils/utils.js";
import classes from "./about.module.scss";

export default function About() {
  const { ref, inView } = useInView({ delay: 400 });

  return (
    <section className={classes.about}>
      <div className={classes["heading-wrapper"]}>
        <Heading text="An" img={aboutImages.mini1}>
          ordinary
        </Heading>
        <Heading text="town" img={aboutImages.mini2}>
          where it all
        </Heading>
        <Heading size="big" text="began..." img={aboutImages.mini3}></Heading>
      </div>
      <p ref={ref} className={classes["about-paragraph"]}>
        <ul className={classes.overflow}>
          <li className={`${inView ? classes.fadeIn : ""}`}>
            Giulia Gartner is an outdoor, travel, and commercial photographer, filmmaker, and
            storyteller
          </li>
          <li className={`${inView ? classes.fadeIn : ""}`}>
            from the Dolomites in northern Italy. Her work focuses on capturing wild and rugged
          </li>
          <li className={`${inView ? classes.fadeIn : ""}`}>
            landscapes with a vivid color palette and dreamy elements. Her love for photography has
          </li>
          <li className={`${inView ? classes.fadeIn : ""}`}>
            spilled over into filmmaking which is one of the main creative outlets she pursues
            today.
          </li>
        </ul>
      </p>
      <NavLink className={classes.btn} href="/">
        Read my story
      </NavLink>
    </section>
  );
}
