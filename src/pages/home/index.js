import React from 'react'
import './style.css'
import Slider from "react-slick";
import Slider1 from './slider/index.js'
import CatSlider  from '../../components/catSlider/index.js'
import Banner from '../../components/banners/index.js'
import Product from '../../components/product/index.js'
import bannerImg from '../../assets/images/file_1734525767798_NewProject(35).jpg'
import Tproduct from './topProduct/index.js'

const home = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite:true,
        slidesToShow: 3,
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
    <div className='home_page'>
       <CatSlider />
      <Slider1 />
      <Banner />

      <div className='homeProducts'>
        <div className='container-fluid py-5'>

            <div className='d-flex align-items-center'>
                <h2>Popular Products</h2>
                  <ul class="list-group list-group-horizontal ms-auto filterTabs">
                      <li class="list-group-item"><a href='#'>All</a></li>
                      <li class="list-group-item"><a>Vegetables</a></li>
                      <li class="list-group-item"><a>Milk & Dairies</a></li>
                      <li class="list-group-item"><a>Electronics Gadgets</a></li>
                      <li class="list-group-item"><a>Cosmetics</a></li>
                  </ul>
              </div>

                  <div className='row productRow'>
                  
                      <div className='productItem'>
                          <Product tag="best" />
                      </div>
                      <div className='productItem'>
                          <Product tag="sale" />
                      </div>
                      <div className='productItem'>
                          <Product tag="hot" />
                      </div>
                      <div className='productItem'>
                          <Product tag="new" />
                      </div>
                      <div className='productItem'>
                          <Product tag="sale" />
                      </div>
                      <div className='productItem'>
                          <Product tag="best" />
                      </div>
                     
                  
                  </div>
        </div>
      </div>




      <div className='homeProducts'>
        <div className='container-fluid py-5'>

            <div className='d-flex align-items-center'>
                <h2>Daily Best Sells</h2>
                  <ul class="list-group list-group-horizontal ms-auto filterTabs">
                      <li class="list-group-item"><a href='#'>Featured</a></li>
                      <li class="list-group-item"><a>Popular</a></li>
                      <li class="list-group-item"><a>Newly Added</a></li>
                      
                  </ul>
              </div>

                  <div className='row productRow'>
                        <div className='col-md-3'>
                            <img src={bannerImg} alt='banner_image'/>
                        </div>

                        <div className='col-md-9'>
                            <Slider {...settings} className="product-slider">
                                <div className='productItem'>
                                    <Product tag="best" />
                                </div>
                                <div className='productItem'>
                                    <Product tag="hot" />
                                </div>
                                <div className='productItem'>
                                    <Product tag="new" />
                                </div>
                                <div className='productItem'>
                                    <Product tag="sale" />
                                </div>
                                <div className='productItem'>
                                    <Product tag="best" />
                                </div>
                               
                            </Slider>
                        </div>
                   
                  </div>
        </div>
      </div>



      <div className='topProductsection'>
        <div className='container-fluid py-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Tproduct title="Top Selling" className="titem"/>
                </div>
                <div className='col-md-3 '>
                    <Tproduct title="Trending Product" className="titem"/>
                </div>
                <div className='col-md-3'>
                        <Tproduct title="Recently Added" className="titem"/>
                </div>
                <div className='col-md-3'>
                         <Tproduct title="Top Rated" className="titem"/>
                </div>
            </div>


            
          
        </div>
      </div>









    </div>
  )
}

export default home
