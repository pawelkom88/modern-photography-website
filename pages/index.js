import React from "react";
import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Menu from "@components/menu/Menu";
import About from "@components/about/About";
import Texture from "@components/texture/Texture";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Texture />
      <Header isOpen={isOpen} onOpen={() => setIsOpen(!isOpen)} />
      <div className="container">
        <Hero />
        <main>
          <About />
        </main>
      </div>
      <Menu isOpen={isOpen} onOpen={() => setIsOpen(false)} />
    </>
  );
}
