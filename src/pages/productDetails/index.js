import React from 'react'
import './details.css'

import { Rating } from '@mui/material';

import pImage from '../../assets/images/girl.png'
export default function ProductDetails() {
  return (
    <div className='productDetails'>
     
        <div className='row'>
            <div className='col'>
            <div className='box'>
                      <h2>Fashion & Beauty</h2>
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Fashion</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Three Piece</li>
                          </ol>
                        </nav>
                    </div>
            </div>
        </div>
      
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-9 part1'>
                    <div className='row py-5' >
                        <div className='col-md-5 productZoom'>
                            <div className='productImg'>
                            <i class="fa-solid fa-magnifying-glass ms-auto"></i>
                            <img src={pImage} alt='Product_Image' />
                            </div>
                        </div>

                        <div className='col-md-7'>
                            <div className='productDetails'>
                                <h2>Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)</h2>
                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

                                <div className='d-flex align-items-center price justify-content-space-between'>
                                        <div className='d-flex align-items-center'>
                                            <span className='price'>RS 150</span>
                                            <del className='oldprice'> RS 200</del>
                                        </div>
                                    
                                </div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <div className='d-flex align-items-center'>
                                    <h4>Size: </h4>
                                    <ul class="list-group list-group-horizontal ms-2 filterTabs">
                                        <li class="list-group-item"><a href='#'>S</a></li>
                                        <li class="list-group-item"><a>M</a></li>
                                        <li class="list-group-item"><a>L</a></li>
                                        <li class="list-group-item"><a>XL</a></li>
                                        <li class="list-group-item"><a>XXL</a></li>
                                    </ul>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <h4>Weight: </h4>
                                    <ul class="list-group list-group-horizontal ms-2 filterTabs">
                                        <li class="list-group-item"><a href='#'>3kg</a></li>
                                        <li class="list-group-item"><a>4kg</a></li>
                                        <li class="list-group-item"><a>5kg</a></li>
                                        
                                    </ul>
                                </div>


                                <p>Availability: <strong>In Stock</strong></p>
                                <p>Brand: <strong>Fashion</strong></p>
                               
                                <button className='btn btn-success'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 part2'>

                </div>
            </div>
        </div>

    </div>
  )
}
