import ProductCard from "../components/ProductCard";
import { featuredProducts } from "../data/products";
import "../components/Products.css";

export default function Products() {
  return <CatalogPage eyebrow="The collection" title="Find your next everyday icon." description="Explore footwear built around comfort, confidence, and the way you actually move." products={featuredProducts} />;
}

export function CatalogPage({ eyebrow, title, description, products }) {
  return (
    <main className="catalog-page container">
      <div className="catalog-page__intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
      <div className="catalog-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </main>
  );
}
