// import Scroll from "@components/scroll/Scroll";
import Hero from "@components/hero/Hero";
import About from "@components/about/About";
import Collection from "@components/collection/Collection";
import Body from "@components/body/Body";
import Footer from "@components/footer/Footer";
import { caseImages } from "../utils/utils";

export default function Home() {
  return (
    <Body>
      {/* <Scroll /> */}
      <div className="container">
        <Hero />
      </div>
      <main style={{ overflow: "hidden" }}>
        <About />
        <Collection
          title="Follow The Tracks"
          date="September 2019"
          place="Mongolia"
          img1={caseImages.case1}
          img2={caseImages.case2}
          alt="Mongolia trip photos"
        />
        <Collection
          title="Cayuga Collection"
          date="July 2021"
          place="Costa Rica"
          img1={caseImages.case3}
          img2={caseImages.case4}
          alt="Cayuga Collection trip photos"
        />
      </main>
      <div className="container">
        <Footer />
      </div>
    </Body>
  );
}
