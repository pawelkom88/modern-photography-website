import React from "react";
import Scrollbar from "smooth-scrollbar";

export default function Scroll() {
  React.useLayoutEffect(() => {
    Scrollbar.init(document.body, {
      damping: 0.06,
      thumbMinSize: 0,
    });

    // return () => Scrollbar.destroy(document.body);
  }, []);

  return null;
}
