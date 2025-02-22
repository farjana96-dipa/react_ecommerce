import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './slider.css'
import img1 from '../../../assets/images/1.png'
import img2 from '../../../assets/images/2.png'
import img3 from '../../../assets/images/3.png'
import img4 from '../../../assets/images/4.png'
import img5 from '../../../assets/images/5.png'

import Newsletter from '../../../components/newsletter/index.js'
const HomeSlider = (jQuery) => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slideToShow: 3,
        slideToScroll: 1
    }
  return (
    <section className='heroSlider'>
        <div className='container-fluid'>
                <Slider {...settings} className='sliderhero'>
                    <div className='item'>
                       <img src={img1} alt="Slider_Image" />
                       <div className='item_info'>
                          <h2>Don't miss the amazing <br /> grocery deals</h2>
                          <h3>Sign up for daily newsletter.</h3>
                          
                       </div>
                    </div>
                    <div className='item'>
                       <img src={img2} alt="Slider_Image" />
                        <div className='item_info'>
                          <h2>50% off on all products <br/>
                          grab the discount.</h2>
                          <h3>Sign up for daily newsletter.</h3>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={img3} alt="Slider_Image" />
                        <div className='item_info'>
                          <h2>Milk & Drinks  are more <br/>helpful for our daily life.</h2>
                          <h3>Sign up for daily newsletter.</h3>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={img4} alt="Slider_Image" />
                        <div className='item_info'>
                          <h2>We are here for your <br/> all skin care solutions.</h2>
                          <h3>Sign up for daily newsletter.</h3>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={img5} alt="Slider_Image" />
                        <div className='item_info'>
                          <h2>Grab the big discount <br/> in our shop.</h2>
                          <h3>Sign up for daily newsletter.</h3>
                        </div>
                    </div>
                   
                </Slider>


              <Newsletter />
        </div>
    </section>
  )
}

export default HomeSlider
