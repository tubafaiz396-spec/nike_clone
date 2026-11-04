import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Reveal from "../components/Reveal";

// Single-page layout: the existing page components are reused unchanged and
// simply stacked as sections. The ids are what the navbar/footer links scroll to.
const OnePage = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Reveal className="reveal--from-left"><About /></Reveal>
      </section>
      <section id="services">
        <Reveal className="reveal--scale"><Services /></Reveal>
      </section>
      <section id="contact">
        <Reveal className="reveal--from-right"><Contact /></Reveal>
      </section>
    </>
  );
};

export default OnePage;
