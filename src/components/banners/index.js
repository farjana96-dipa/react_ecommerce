import React from 'react'
import './banner.css'
import  { useState } from "react";
import Slider from "react-slick";

import banner1 from '../../assets/images/banner1.avif'
import banner2 from '../../assets/images/banner5.jpg'
import banner3 from '../../assets/images/banner2.avif'
import banner4 from '../../assets/images/banner3.avif'
import banner5 from '../../assets/images/banner4.avif'

const banner = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true, // Adjusts slide width based on content
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false, // Disable variable width on smaller screens if necessary
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false, // Disable variable width on smaller screens if necessary
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false, // Disable variable width on even smaller screens
                }
            }
        ]
    };
  return (
    <div className='Banner'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
            <Slider {...settings} className="banner-slider">
                <div className='box'>
                    <img src={banner1} alt="Banner_img"/>
                </div>
                <div className='box'>
                    <img src={banner2} alt="Banner_img"/>
                </div>
                <div className='box'>
                    <img src={banner3} alt="Banner_img"/>
                </div>
                <div className='box'>
                    <img src={banner4} alt="Banner_img"/>
                </div>
                <div className='box'>
                    <img src={banner5} alt="Banner_img"/>
                </div>
            </Slider>
            </div>
        </div>
      </div>
    </div>
  )
}

export default banner
