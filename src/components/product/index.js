import React from 'react'
import './product.css'
import { Rating } from '@mui/material';

import img from '../../assets/images/girl.png'

const product = (props) => {
  return (
    <div className='productThumb'>
      {
        props.tag != null && props.tag != undefined && <span className={`pbadge ${props.tag}`}>{props.tag}</span>
      }
      
        <div className='imgWrap'>
          <div className='d-flex align-items-center'>
          <img src={img} alt='product_img'/>
            </div>
           
            <div className='overlay'>
                  <ul class="list-group list-group-horizontal ms-auto icons">
                      <li class="list-group-item" tooltip="Add to Wishlist"><a href='#'><i class="fa-regular fa-heart"></i></a></li>
                      <li class="list-group-item" tooltip="Quick View"><a><i class="fa-solid fa-eye"></i></a></li>
                      <li class="list-group-item" tooltip="Add to Cart"><a><i class="fa-solid fa-cart-shopping"></i></a></li>
                  </ul>
            </div>
        </div>
        <div className='productInfo'>
            <span className='d-block brand'>Nike</span>
            <h4>Men Layerr Regular Fit Sp...</h4>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <p className='by'>By <a className='author ml-3'>Nest Food</a></p>
            <div className='d-flex align-items-center price justify-content-space-between'>
                <div className='d-flex align-items-center'>
                    <span className='price'>RS 150</span>
                    <del className='oldprice'> RS 200</del>
                </div>
              <button className='btn btn-success cart ms-auto'><i class="fa-solid fa-plus"></i> Cart</button>
            </div>
        </div>
    </div>
  )
}

export default product
