import React, { use } from "react";
import Image from "next/image";
import { aboutImages } from "../../utils/utils.js";
import classes from "./about.module.scss";
import useMatchMedia from "@hooks/useMatchMedia.js";

export default function About() {
  const { matches } = useMatchMedia("(max-width: 1000px)");

  const rensponsivnessW = matches ? 30 : 70;
  const rensponsivnessH = matches ? 40 : 90;

  return (
    <section className={classes.about}>
      <div className={classes["heading-wrapper"]}>
        {/* component */}
        <h3 className={classes.heading}>
          <span>A</span>
          <Image
            src={aboutImages.mini1}
            width={rensponsivnessW}
            height={rensponsivnessH}
            className={`${classes.img} ${classes.first}`}
            alt="asd"
          />
          tiny mountain
        </h3>
        <h3 className={classes.heading}>
          village
          <Image
            src={aboutImages.mini1}
            width={rensponsivnessW}
            height={rensponsivnessH}
            className={`${classes.img} ${classes.second}`}
            alt="asd"
          />
          <span>where it all</span>
        </h3>
        <h3 className={classes.heading}>
          <span>began...</span>
          <Image
            src={aboutImages.mini1}
            width={rensponsivnessW}
            height={rensponsivnessH}
            className={`${classes.img} ${classes.third}`}
            alt="asd"
          />
        </h3>
      </div>
      <p className={classes["about-paragraph"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptas explicabo
        temporibus perferendis velit facere quod neque eos itaque odit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Labore, ratione?
      </p>
    </section>
  );
}
