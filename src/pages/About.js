import { Link } from "react-router-dom";
import "../components/About.css";

export default function About() {
  return (
    <section className="about-container container">
      <div className="about-intro"><p className="eyebrow">The mindset</p><h2>More than a shoe.<br /><em>A way forward.</em></h2><p>We believe movement is a language everyone speaks. That is why we pair considered design with the comfort and confidence to take on what is next.</p></div>
      <div className="about-grid">
        <div className="about-stat"><strong>1964</strong><span>Built on curiosity, made for motion.</span></div>
        <div className="about-copy"><p>From the track to the street, our products are designed to support the athlete in all of us. Every detail has a job: cushioning where you need it, energy where you want it, and style that stays with you after the workout.</p><Link className="text-link" to="/products">Explore the collection <span>→</span></Link></div>
      </div>
      <div className="about-values"><div><span>01</span><h3>Innovation</h3><p>Progress starts with a better question.</p></div><div><span>02</span><h3>Performance</h3><p>Products that meet you at your pace.</p></div><div><span>03</span><h3>Inclusion</h3><p>There is room for every body in motion.</p></div></div>
    </section>
  );
}
