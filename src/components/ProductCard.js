import { Link } from "react-router-dom";
import { formatPrice } from "../utils/price";
import AddToCartButton from "./AddToCartButton";
import "./ProductCard.css";

export default function ProductCard({ product, compact = false }) {
  return (
    <article className={`catalog-card${compact ? " catalog-card--compact" : ""}`}>
      <Link className="catalog-card__image" to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <span className="catalog-card__badge">{product.category}</span>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="catalog-card__body">
        <div className="catalog-card__heading">
          <div>
            <p className="catalog-card__eyebrow">Nike</p>
            <h3>{product.name}</h3>
          </div>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        {!compact && <p className="catalog-card__description">{product.description}</p>}
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
