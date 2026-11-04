import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import Reveal from "../components/Reveal";
import { featuredProducts } from "../data/products";

const collections = [
  { title: "Running", detail: "Engineered for the long way", image: "/images/cutout-vomero.png", className: "collection-card--wide" },
  { title: "Women", detail: "Made to move your way", image: "/images/cutout-women-3.png" },
  { title: "Kids", detail: "Big energy, small feet", image: "/images/cutout-kids-3.png" },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState("");

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollProgress(Math.min(1, Math.max(0, window.scrollY / 520))));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, []);

  const activeProduct = featuredProducts[4];

  const subscribe = (event) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setNewsletterState("Enter a valid email to join the club."); return; }
    setNewsletterState("You're on the list. Keep moving.");
    setEmail("");
  };

  return (
    <main className="home-page">
      <section className="showroom-hero">
        <div className="hero-gridline hero-gridline--one" />
        <div className="hero-gridline hero-gridline--two" />
        <div className="showroom-hero__topline container"><span>01 / 04</span><span>New season · 2026</span><span>Scroll to explore <b>↓</b></span></div>
        <div className="container showroom-hero__content">
          <div className="showroom-hero__copy"><p className="eyebrow">The future of fast</p><h1>Feel<br /><span>the</span><br />flight<span className="hero-period">.</span></h1><p className="showroom-hero__description">Energy-returning comfort for every mile. Meet the new Air Zoom line, tuned for the moments that ask for more.</p><div className="hero-actions"><Link className="button button--accent" to={`/products/${activeProduct.id}`}>Shop the drop <span>↗</span></Link><Link className="button button--ghost" to="/#collections">Explore stories</Link></div></div>
          <div className="showroom-hero__visual" aria-label="Featured Nike running shoe"><span className="hero-visual__orbit hero-visual__orbit--one" /><span className="hero-visual__orbit hero-visual__orbit--two" /><span className="hero-visual__tag">AIR<br />ZOOM<br /><b>01</b></span><div className="showroom-hero__shoe-wrap"><img className="showroom-hero__shoe" src="/images/shoe_image.png" alt={activeProduct.name} style={{ "--shoe-progress": scrollProgress }} /></div><div className="hero-product-note"><span>Featured / 01</span><strong>{activeProduct.name}</strong><small>Performance runner · ₹{activeProduct.price.toLocaleString("en-IN")}</small></div></div>
        </div>
        <div className="showroom-hero__bottom container"><div className="hero-scroll-note"><span>↓</span> Scroll to discover</div><div className="hero-price"><span>Just in</span><strong>Air Zoom Fly</strong><Link to="/products">View all products ↗</Link></div></div>
      </section>
      <Reveal className="reveal--from-left"><section className="collections-section container" id="collections"><div className="dark-section-heading"><div><p className="eyebrow">Curated for motion</p><h2>Find your<br /><em>pace.</em></h2></div><p>Different routes. Same feeling. Explore the collection built around the way you move.</p></div><div className="collection-grid">{collections.map((collection, index) => <Link className={`collection-card ${collection.className || ""}`} to={index === 0 ? "/NewArrivals" : index === 1 ? "/Women" : "/Kids"} key={collection.title}><img src={collection.image} alt="" /><div className="collection-card__shade" /><div className="collection-card__copy"><span>0{index + 1}</span><h3>{collection.title}</h3><p>{collection.detail}</p><b>Explore ↗</b></div></Link>)}</div></section></Reveal>
      <ProductSlider />
      <Reveal className="reveal--from-right"><section className="club-section container" id="club"><div className="club-section__art"><img src="/images/cutout-new-2.png" alt="Nike sneaker floating in the dark" /><span>NIKE / 2026</span></div><div className="club-section__copy"><p className="eyebrow">The movement club</p><h2>Keep<br /><em>moving.</em></h2><p>Get early access to new drops, stories from the athletes who inspire us, and a little more motivation in your inbox.</p><form onSubmit={subscribe}><label className="sr-only" htmlFor="club-email">Email address</label><input id="club-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" /><button type="submit" aria-label="Subscribe">↗</button></form>{newsletterState && <small className={newsletterState.startsWith("Enter") ? "form-error" : "form-success"}>{newsletterState}</small>}</div></section></Reveal>
    </main>
  );
}
