import Heading from "./heading/Heading";
import React from "react";
import { aboutImages } from "../../utils/utils.js";
import classes from "./about.module.scss";

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes["heading-wrapper"]}>
        <Heading text="An" img={aboutImages.mini1}>
          ordinary
        </Heading>
        <Heading text="town" img={aboutImages.mini1}>
          where it all
        </Heading>
        <Heading text="began..." img={aboutImages.mini1}></Heading>
      </div>
      <p className={classes["about-paragraph"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptas explicabo
        temporibus perferendis velit facere quod neque eos itaque odit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Labore, ratione?
      </p>
    </section>
  );
}
