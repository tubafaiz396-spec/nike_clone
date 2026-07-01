import React from 'react';
import "../components/Menu.css"

const menProducts = [
  {
    id: 1,
    name: "Nike Brasilia 9.5",
    price: "₹9,999",
    image: "/images/NK+BRSLA.png",
    description: "A versatile running shoe with comfort and durability.",
  },
  {
    id: 2,
    name: "Nike Championship",
    price: "₹13,499",
    image: "/images/NIKE+CHAMPIONSHIP.jpg",
    description: "Soft cushioning and a secure fit for long-distance runs.",
  },
  {
    id: 3,
    name: "Nike Air Force 1'07 Texture",
    price: "₹7,499",
    image: "/images/AIR+FORCE+1+'07.png",
    description: "Classic style with premium leather for everyday wear.",
  }
];

export default function Men() {
    const handleBuyNow = (productName) => {
        alert(`You have added ${productName} to the cart.`);
      };
  return (
    <div className="product-page container">
      <h2>Men's Collection</h2>
      <div className="product-grid">
        {menProducts.map((product) => (
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
