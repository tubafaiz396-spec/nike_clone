import React from 'react';
import "../components/Menu.css"

const womenProducts = [
  {
    id: 1,
    name: "Nike Sportswear Phoenix Fleece",
    price: "₹10,999",
    image: "/images/women1.png",
    description: "Iconic silhouette with cushioned comfort.",
  },
  {
    id: 2,
    name: "Nike Aura",
    price: "₹6,499",
    image: "/images/women2.png",
    description: "Lightweight, breathable, and flexible for all-day wear.",
  },
  {
    id: 3,
    name: "Nike Air Max Dn8",
    price: "₹8,799",
    image: "/images/women3.png",
    description: "Retro-inspired style with modern cushioning.",
  }
];

export default function Women() {
    const handleBuyNow = (productName) => {
        alert(`You have added ${productName} to the cart.`);
      };
  return (
    <div className="product-page container">
      <h2>Women's Collection</h2>
      <div className="product-grid">
        {womenProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <button className="buy-btn" onClick={() => handleBuyNow(product.name)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
