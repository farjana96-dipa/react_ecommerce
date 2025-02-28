import React from 'react'
import './cart.css'
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import pimg1 from '../../assets/images/file_1734527661384_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp'
import pimg2 from '../../assets/images/file_1734529571688_zoom_1-1713900137.webp'
import pimg3 from '../../assets/images/file_1734527242808_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-0-202406162001.webp'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';

import { Rating } from '@mui/material';

export default function Cart() {

     const [quantity, setQuantity] = useState(1);
    
        const handleDecrease = () =>{
            setQuantity(quantity > 1 ? quantity - 1 : 1);
        }
    
        const handleIncrease = () =>{
            setQuantity(quantity + 1);
        }
    
  return (
    <div className='cart_page'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='box'>
                      <h2>Cart Page</h2>
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Shop</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Cart</li>
                          </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


        <section className='cartSection mb-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8'>
                         <h2>Your Cart</h2>
                        <div className='d-flex align-items-center'>
                            <p>There are <strong className='text-g'> 5</strong> items in your cart.</p>
                            <a href='#' className='ms-auto'><DeleteOutlineOutlinedIcon className='me-2'/>Clear Cart</a>
                        </div>

                        <div className='cartWrapper my-4'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>    
                                    <thead>
                                        <tr>
                                            <th style={{width: '40%'}}>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>

                                                    <img src={pimg1} />
                                                    <div className='ms-3'>
                                                        <h4>Apple iPhone 13 128 GB Pink</h4>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$ 999.00</td>
                                            <td>
                                                <div className='d-flex align-items-center quantity'>
                                                    <button onClick={handleDecrease}><i class="fa-solid fa-minus"></i></button>
                                                    <p>{quantity}</p>
                                                    <button onClick={handleIncrease}><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td className='text-success'>$ 999.00</td>
                                            <td><DeleteOutlineOutlinedIcon /></td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>

                                                    <img src={pimg2} />
                                                    <div className='ms-3'>
                                                    <h4>Men Layerr Regular Fit Spread Collar Cotton Shirt</h4>
                                                      
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$ 233.00</td>
                                            <td>
                                                <div className='d-flex align-items-center quantity'>
                                                    <button onClick={handleDecrease}><i class="fa-solid fa-minus"></i></button>
                                                    <p>{quantity}</p>
                                                    <button onClick={handleIncrease}><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td className='text-success'>$ 233.00</td>
                                            <td><DeleteOutlineOutlinedIcon /></td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>

                                                    <img src={pimg3} />
                                                    <div className='ms-3'>
                                                    <h4>OnePlus Nord CE 3 Lite 5G 128 GB</h4>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$ 600.00</td>
                                            <td>
                                                <div className='d-flex align-items-center quantity'>
                                                    <button onClick={handleDecrease}><i class="fa-solid fa-minus"></i></button>
                                                    <p>{quantity}</p>
                                                    <button onClick={handleIncrease}><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td className='text-success'>$ 600.00</td>
                                            <td><DeleteOutlineOutlinedIcon /></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='d-flex align-items-center'>
                            <button className='back'>Back to Shop <ShoppingCartOutlinedIcon/></button>
                            <button className='ms-auto update'>Update Cart <UpdateOutlinedIcon/></button>
                        </div>
                    </div>

                    <div className='col-md-4 checkpart'>
                        <div className='card p-3 '>
                            <div className='d-flex align-items-center mb-3 part'>
                               <p className='gray'>SubTotal: </p>
                               <p className='ms-auto right'>$900.00</p>
                            </div>

                            <div className='d-flex align-items-center mb-3 part'>
                               <p className='gray'>Shipping: </p>
                               <p className='ms-auto right'>FREE</p>
                            </div>


                            <div className='d-flex align-items-center mb-3 part'>
                               <p className='gray'>Estimate For: </p>
                               <p className='ms-auto right'>Bangladesh</p>
                            </div>

                            <div className='d-flex align-items-center mb-3 part'>
                               <p className='gray'>Total: </p>
                               <p className='ms-auto right'>$900</p>
                            </div>

                            <button className='checkBtn'>Proceed To Checkout <ShoppingCartCheckoutOutlinedIcon /></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}
