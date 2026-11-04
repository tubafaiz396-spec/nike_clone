import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";
import ProductCard from "./ProductCard";
import { featuredProducts } from "../data/products";
import Reveal from "./Reveal";

function Arrow({ direction, onClick }) {
  return <button className={`slider-arrow slider-arrow--${direction}`} type="button" onClick={onClick} aria-label={`${direction === "next" ? "Next" : "Previous"} products`}>{direction === "next" ? "→" : "←"}</button>;
}

export default function ProductSlider() {
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return undefined;
    const update = () => setReducedMotion(query.matches);
    query.addEventListener?.("change", update);
    query.addListener?.(update);
    return () => { query.removeEventListener?.("change", update); query.removeListener?.(update); };
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: !reducedMotion,
    autoplaySpeed: 3400,
    pauseOnHover: true,
    pauseOnFocus: true,
    speed: 1050,
    cssEase: "cubic-bezier(.22,.61,.36,1)",
    waitForAnimate: true,
    useTransform: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow: <Arrow direction="previous" />,
    nextArrow: <Arrow direction="next" />,
    touchThreshold: 12,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <Reveal>
    <section className="featured-section container" aria-labelledby="featured-heading">
      <div className="section-heading">
        <div><p className="eyebrow">The edit</p><h2 id="featured-heading">Featured products</h2></div>
        <p>Fresh silhouettes, familiar comfort, and a reason to keep moving.</p>
      </div>
      <div className="product-slider">
        <Slider {...settings}>{featuredProducts.map((product) => <div className="product-slider__slide" key={product.id}><ProductCard product={product} compact /></div>)}</Slider>
      </div>
    </section>
    </Reveal>
  );
}
