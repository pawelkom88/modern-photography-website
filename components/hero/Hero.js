import React from "react";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <video
        style={{
          backgroundImage:
            'url("https://uploads-ssl.webflow.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-poster-00001.jpg")',
        }}
        id="u457537-video"
        className={classes["hero-video"]}
        preload="auto"
        width="1050"
        height="591"
        autoPlay
        loop
        plays-inline="true"
        data-setup='{"fluid": true}'>
        <source
          src="https://uploads-ssl.webflow.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://uploads-ssl.webflow.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.webm"
          data-wf-ignore="true"></source>
      </video>
      <div className={classes.wrapper}>
        <div className={classes["heading-wrapper"]}>
          <h2 className={classes["hero-heading"]}>Giulia Gartner</h2>
        </div>
        <div className={classes["heading-wrapper"]}>
          <h2 style={{ animationDelay: ".7s" }} className={classes["hero-heading"]}>
            Photography
          </h2>
        </div>
      </div>
    </section>
  );
}
