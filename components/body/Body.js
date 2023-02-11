import React, { useEffect, useRef } from "react";
import Header from "@components/header/Header";
import Menu from "@components/menu/Menu";
import Texture from "@components/texture/Texture";
import { ThemeContext } from "context/ThemeMode";

export default function Body({ children }) {
  const { darkMode } = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const bodyRef = useRef(null);
  const scrollBarRef = useRef(null);

  useEffect(() => {
    if (!darkMode) {
      // scrollBarRef.current.classList.add("light-mode");
      bodyRef.current.classList.add("light-mode");
      bodyRef.current.classList.remove("dark-mode");
    } else {
      bodyRef.current.classList.remove("light-mode");
      bodyRef.current.classList.add("dark-mode");
    }
  }, [darkMode]);

  return (
    <div ref={bodyRef}>
      <Texture />
      <Header isOpen={isOpen} onOpen={() => setIsOpen(!isOpen)} />
      {children}
      <Menu darkMode={darkMode} isOpen={isOpen} onOpen={() => setIsOpen(false)} />
    </div>
  );
}
