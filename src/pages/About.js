import React from "react";
import "../components/About.css"; 

const About = () => { 
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Nike</h1>
        <p>Innovation, inspiration, and athletic excellence — since 1964.</p>
      </section>

      <section className="about-story">
        <h2>Who We Are</h2>
        <p>
          Nike is more than just a sportswear brand — it’s a movement. Born from the drive to help athletes push their limits, we blend innovation with inspiration to shape the future of performance and style. Whether you're on the court, the street, or the trail — we’ve got your back.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To bring inspiration and innovation to every athlete* in the world.
        </p>
        <p className="note">
          *If you have a body, you are an athlete.
        </p>
      </section>

      <section className="about-values">
        <h2>What Drives Us</h2>
        <ul>
          <li><strong>Innovation:</strong> Pushing boundaries with cutting-edge technology.</li>
          <li><strong>Performance:</strong> Products that deliver, no matter the challenge.</li>
          <li><strong>Sustainability:</strong> A greener future, one step at a time.</li>
          <li><strong>Inclusion:</strong> A global community that celebrates every voice.</li>
        </ul>
      </section>

      <section className="about-info"> 
        <h3>Be More. Be Nike.</h3>
        <button>Explore Our Products</button>
      </section>
    </div>
  );
};

export default About;
