import Scroll from "@components/scroll/Scroll";
import Hero from "@components/hero/Hero";
import About from "@components/about/About";
import Collection from "@components/collection/Collection";
import Body from "@components/body/Body";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <Body>
      <Scroll />
      <div className="container">
        <Hero />
        <main>
          <About />
          <Collection title="Title" date="date" />
        </main>
        <Footer />
      </div>
    </Body>
  );
}
