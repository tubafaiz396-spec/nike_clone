import React from 'react';
import "../components/Menu.css"

const newArrivals = [
  {
    id: 1,
    name: "Nike 24.7 PerfectStretch",
    price: "₹18,999",
    image: "/images/new1png.png",
    description: "Top-of-the-line performance Dri-FIT for serious athletes.",
  },
  {
    id: 2,
    name: "Nike Shox TL",
    price: "₹14,499",
    image: "/images/new2.png",
    description: "Giannis' signature shoe for speed and control.",
  },
  {
    id: 3,
    name: "Jordan",
    price: "₹8,999",
    image: "/images/new3.png",
    description: "Sleek, modern design with lightweight cushioning.",
  }
];

export default function NewArrivals() {
    const handleBuyNow = (productName) => {
        alert(`You have added ${productName} to the cart.`);
      };
  return (
    <div className="product-page container">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {newArrivals.map((product) => (
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
