import React from 'react';
import "../components/Menu.css"

const kidsProducts = [
  {
    id: 1,
    name: "Nike Sportswear Club Fleece",
    price: "₹6,999",
    image: "/images/kids1.png",
    description: "Great comfort and style for young feet.",
  },
  {
    id: 2,
    name: "Nike Elemental",
    price: "₹3,499",
    image: "/images/kids2.png",
    description: "Affordable, stylish, and comfortable for everyday use.",
  },
  {
    id: 3,
    name: "Nike Air Max Nova",
    price: "₹4,299",
    image: "/images/kids3.png",
    description: "Easy slip-on design and flexible for active kids.",
  }
];

export default function Kids() {
    const handleBuyNow = (productName) => {
        alert(`You have added ${productName} to the cart.`);
      };
  return (
    <div className="product-page container">
      <h2>Kids' Collection</h2>
      <div className="product-grid">
        {kidsProducts.map((product) => (
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
