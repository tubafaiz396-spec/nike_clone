import React from 'react';
import "../components/Products.css";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "₹12,999",
    image: "/images/NIKE+AIR+MAX+1+PRM.png",
    features: ["Lightweight", "Breathable", "Max Air cushioning"],
  },
  {
    id: 2,
    name: "Nike Revolution 6",
    price: "₹4,499",
    image: "/images/NIKE+DUNK+LOW+RETRO.png",
    features: ["Soft foam midsole", "Eco-friendly materials", "Everyday wear"],
  },
  {
    id: 3,
    name: "Nike Court Vision Low",
    price: "₹5,299",
    image: "/images/NIKE+CORTEZ+TXT.png",
    features: ["Retro look", "Durable upper", "Versatile style"],
  }
];

export default function Products() {
    // Function to handle Buy Now click
  const handleBuyNow = (productName) => {
    alert(`You have added ${productName} to your cart!`);
  };
  return (
    <div className="products-page container">
      <h2>Our Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <ul className="features">
              {product.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
            <button className="buy-btn" onClick={() => handleBuyNow(product.name)} > 
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
