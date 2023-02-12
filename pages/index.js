import Scroll from "@components/scroll/Scroll";
import Hero from "@components/hero/Hero";
import About from "@components/about/About";
import Collection from "@components/collection/Collection";
import Body from "@components/body/Body";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <Body>
      {/* <Scroll /> */}
      <div className="container">
        <Hero />
      </div>
      <main style={{ overflow: "hidden" }}>
        <About />
        <Collection title="Follow The Tracks" date="September 2019" />
        <Collection title="Follow The Tracks" date="September 2019" />
      </main>
      <div className="container">
        <Footer />
      </div>
    </Body>
  );
}
