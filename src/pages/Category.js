import React from 'react';
import { Link } from 'react-router-dom'; 
import "../components/Category.css"

const categories = [
  { id: 1, name: "Men", image: "/images/men.jpg" },
  { id: 2, name: "Women", image: "/images/womenpng.png" },
  { id: 3, name: "Kids", image: "/images/kids.png" },
  { id: 4, name: "NewArrivals", image: "/images/ewpng.png" },
];

export default function Category() {
  return (
    <div className="category-page container">
      <h2>Explore Our Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} className="category-img" />
            <h3>{category.name}</h3>
            <Link to={`/${category.name.toLowerCase()}`} className="category-link">
              <button className="category-btn">Shop Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
