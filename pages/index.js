import React, { useEffect } from "react";
import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Menu from "@components/menu/Menu";
import About from "@components/about/About";
import Texture from "@components/texture/Texture";
import Collection from "@components/collection/Collection";
import { ThemeContext } from "context/ThemeMode";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector("body");

    if (!darkMode) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Texture />
      <Header
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />
      <div className="container">
        <Hero />
        <main>
          <About />
          <Collection title="Title" date="date" darkMode={darkMode}/>
          {/* <Collection title="Title" date="date" /> */}
        </main>
      </div>
      <Menu darkMode={darkMode} isOpen={isOpen} onOpen={() => setIsOpen(false)} />
    </>
  );
}
