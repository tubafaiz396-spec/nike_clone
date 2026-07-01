import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css"; 

const ProductSlider = () => {
  const images = [
    "/images/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    "/images/NIKE+AIR+MAX+1+PRM.png",
    "/images/NIKE+CORTEZ+TXT.png",
    "/images/NIKE+DUNK+LOW+RETRO.png",
    "/images/NIKE+ZOOM+VOMERO+5.png"
  ];

  const settings = {
    dots: true,             //Shows navigation dots below the slider.
    infinite: true,         //The slider loops infinitely.
    slidesToShow: 2,        //Show 2 images at a time.
    slidesToScroll: 1,      //Move 1 image at a time when sliding.
    autoplay: true,         //It automatically slides without user interaction.
    speed: 1000,            //Slide transition takes 1 second (1000ms).
    autoplaySpeed: 3000,    //Every 3 seconds it slides automatically.
    cssEase: "linear"       // Controls the animation smoothness.
  };

  return (
    <div className="slider-container">
      <h2>Our Products</h2>
       <Slider {...settings}>    {/* Renders the slider and applies your settings. */}
       
       {/*loops through the images array*/}
        {images.map((img, index) => (      
          <div key={index} className="slider-item">
            <img src={img} alt={`Nike Product ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
