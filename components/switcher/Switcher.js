import React from "react";
import classes from "./switcher.module.scss";

export default function Switcher({ onChange }) {
  React.useState();

  return (
    <div className={classes.wrapper}>
      <input onChange={onChange} type="checkbox" class={classes.checkbox} id="checkbox" />
      <label for="checkbox" class={classes.label}>
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class={classes.ball} />
      </label>
    </div>
  );
}
