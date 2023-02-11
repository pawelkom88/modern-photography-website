import Image from "next/image";
import useMatchMedia from "@hooks/useMatchMedia.js";
import classes from "./heading.module.scss";

export default function Heading({ children, img, text = "", size = "" }) {
  const { matches } = useMatchMedia("(max-width: 1000px)");

  const rensponsivnessW = matches ? 30 : 70;
  const rensponsivnessWide = matches ? 70 : 130;
  const rensponsivnessH = matches ? 40 : 90;

  return (
    <h3 className={classes.heading}>
      <span>{text}</span>
      <Image
        src={img}
        width={size ? rensponsivnessWide : rensponsivnessW}
        height={rensponsivnessH}
        className={`${classes.img} ${classes.first}`}
        alt="asd"
      />
      {children}
    </h3>
  );
}
