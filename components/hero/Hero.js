import React from "react";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <video
        id="u457537-video"
        className={classes["hero-video"]}
        preload="auto"
        width="1050"
        height="591"
        poster="assets/home_poster.jpg"
        autoPlay
        loop
        data-setup='{"fluid": true}'>
        <source
          src="https://uploads-ssl.webflow.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          type="video/mp4"
        />
        {/* <source src="assets/videos/vide.mp4" type="video/mp4" /> */}
        {/* <source src="assets/home.webm" type="video/webm" /> */}
      </video>
      <div className={classes.wrapper}>
        <div className={classes["heading-wrapper"]}>
          <h2 className={classes["hero-heading"]}>Giulia</h2>
        </div>

        <div className={classes["heading-wrapper"]}>
          <h2 style={{ animationDelay: ".6s" }} className={classes["hero-heading"]}>
            Gartner
          </h2>
        </div>
        <div className={classes["heading-wrapper"]}>
          <h2 style={{ animationDelay: ".9s" }} className={classes["hero-heading"]}>
            Photography
          </h2>
        </div>
      </div>
    </section>
  );
}
