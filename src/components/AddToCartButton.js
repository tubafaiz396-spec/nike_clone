import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const addProduct = useCallback(() => {
    addItem({ id: product.id, name: product.name, price: Number(product.price), image: product.image });
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1500);
  }, [addItem, product.id, product.name, product.price, product.image]);

  return (
    <div className="buy-action">
      <button className={`buy-btn${added ? " is-added" : ""}`} onClick={addProduct} aria-live="polite">
        {added ? "Added ✓" : "Add to cart"}
      </button>
    </div>
  );
}
