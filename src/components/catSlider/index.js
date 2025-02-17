import React from "react";
import Slider from "react-slick";
import './cat.css'
import img1 from '../../assets/images/file_1734525204708_fash.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <section className="catSlider">
    <div className="container-fluid">
        <h3>Featured Categories</h3>
        <Slider {...settings} className="cat-slider">
        <div className="item">
           
   
                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
         
            
        </div>

        <div className="item">

                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
        
            
        </div>

        <div className="item">
        
                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
          
            
        </div>

        <div className="item">
      
                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
        
            
        </div>

        <div className="item">
        
                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
         
            
        </div>

        <div className="item">
     
                <img src={img1} alt="sliderimage" />
                <h4>Vegetables</h4>
                <p>14 items</p>
        
            
        </div>

        </Slider>
    </div>
    </section>
  );
}
