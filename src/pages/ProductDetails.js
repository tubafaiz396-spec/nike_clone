import { Link, Navigate, useParams } from "react-router-dom";
import { allProducts } from "../data/products";
import { formatPrice } from "../utils/price";
import AddToCartButton from "../components/AddToCartButton";
import "../components/ProductDetails.css";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === productId);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <main className="product-detail-page container">
      <Link className="product-detail__back" to="/products">← Back to products</Link>
      <div className="product-detail">
        <div className="product-detail__visual"><span className="catalog-card__badge">{product.category}</span><img src={product.image} alt={product.name} /></div>
        <div className="product-detail__content"><p className="eyebrow">Nike · {product.category}</p><h1>{product.name}</h1><p className="product-detail__price">{formatPrice(product.price)}</p><p className="product-detail__description">{product.description}</p><div className="product-detail__features"><span>Designed for daily motion</span><span>Comfort-led cushioning</span><span>Cash on delivery available</span></div><AddToCartButton product={product} /><p className="product-detail__note">Sign in is required before adding products to your shopping bag.</p></div>
      </div>
    </main>
  );
}
