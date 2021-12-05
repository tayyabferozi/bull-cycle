import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Specs from "./Specs";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import About from "./About";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Specs />
      <Roadmap />
      <FAQ />
      <About />
    </>
  );
};

export default Landing;
