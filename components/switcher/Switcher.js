import Image from "next/image";
import React from "react";
import classes from "./switcher.module.scss";
import { shutterOpen, shutterClosed } from "../../utils/utils";

export default function Switcher({ onChange, value }) {
  return (
    <div className={classes.wrapper}>
      <input
        onChange={onChange}
        type="checkbox"
        className={classes.checkbox}
        id="checkbox"
        value={value}
      />
      <label
        style={{ backgroundColor: `${value ? "#ebeef2" : "#fff"}` }}
        htmlFor="checkbox"
        className={classes.label}>
        <Image width={20} height={20} src={shutterClosed} alt="shutter_icon_closed" />
        <Image width={20} height={20} src={shutterOpen} alt="shutter_icon_open" />
        <div style={{ backgroundColor: `${value ? "#131517" : "#1a4572"}` }} className={classes.ball} />
      </label>
      <small className={classes.theme}>{value ? "dark" : "light"}</small>
    </div>
  );
}
