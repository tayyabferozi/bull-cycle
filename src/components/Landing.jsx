import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Specs from "./Specs";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import About from "./About";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Specs />
      <Roadmap />
      <FAQ />
      <About />
    </>
  );
};

export default Landing;
