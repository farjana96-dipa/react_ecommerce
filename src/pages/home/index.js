import React from 'react'
import './style.css'
import Slider from './slider/index.js'
import CatSlider  from '../../components/catSlider/index.js'
import Banner from '../../components/banners/index.js'
import Product from '../../components/product/index.js'

const home = () => {
  return (
    <div className='home_page'>
       <CatSlider />
      <Slider />
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
                    <Product />
                </div>
                <div className='productItem'>
                    <Product />
                </div>
                <div className='productItem'>
                    <Product />
                </div>
                <div className='productItem'>
                    <Product />
                </div>
                <div className='productItem'>
                    <Product />
                </div>
              </div>
        </div>
      </div>




    </div>
  )
}

export default home
