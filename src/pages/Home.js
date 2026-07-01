import React from 'react'
import { Link } from 'react-router-dom'; 
import ProductSlider from "../components/ProductSlider";

export default function Home() {
    return(  
        <>
        <main className="content container">
    
        <div className="contentText">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
    
        <div className="contentBtns">
            <Link to="/products" target='_blank'>
            <button className="primary">Shop Now</button>
            </Link>
            <Link to="/category" target='_blank'>
            <button className="secondary">Category</button>
            </Link>
        </div>
    
        <div className="shopping">
            <p>Also Available On</p>
    
        <div className="brand-icons">
            <a href='https://www.flipkart.com' target='_blank' rel="noopener noreferrer">     {/*rel="noopener noreferrer":prevents the new page from accessing window.opener*/}
            <img src="/images/flipkart (1).png" alt="flipcart" />
            </a>
            <a href='https://www.amazon.com' target="_blank" rel="noopener noreferrer">
            <img src="/images/amazon (1).png" alt="amazon" />
            </a>
        </div>
        </div>
    
        </div>
        
        <div className="contentImage">
            <img src="/images/shoe_image.png" alt="shoe" />
        </div>

        <ProductSlider/>
        </main>
        </>
        );
}
