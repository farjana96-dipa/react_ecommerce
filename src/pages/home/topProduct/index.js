import React from 'react'
import './topProduct.css'
import { Rating } from '@mui/material';
import pImg1 from '../../../assets/images/file_1734528556152_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-0-202303181240.webp'
import pImg2 from '../../../assets/images/file_1734527661384_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp'
import pImg3 from '../../../assets/images/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg'

export default function topProduct(props) {
  return (
    <div className='top-product'>
        <div className='container-fluid'>
        <div className='row'>
           
         
            <div className='col'>
                <div className='sel-box'>
                    <div className='items'>
                            {
                        props.title != null && props.title!= undefined &&    <h2 className='htitle'>{props.title}</h2>
                        }
                        <div className='d-flex align-items-center py-3'>
                            <div className='proImg'>
                                <img src={pImg1} alt='product_image'/>
                            </div>
                            <div className='pInfo'>
                                <h4>Nestle Original Coffee-Mate</h4>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price'>RS 150</span>
                                    <del className='oldprice'> RS 200</del>
                                </div>
                            </div>
                        </div>
                    </div>
             

                    <div className='items'>
                        <div className='d-flex align-items-center py-3'>
                            <div className='proImg'>
                                <img src={pImg2} alt='product_image'/>
                            </div>
                            <div className='pInfo'>
                                <h4>Nestle Original Coffee-Mate</h4>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price'>RS 150</span>
                                    <del className='oldprice'> RS 200</del>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='items'>
                        <div className='d-flex align-items-center py-3'>
                            <div className='proImg'>
                                <img src={pImg3} alt='product_image'/>
                            </div>
                            <div className='pInfo'>
                                <h4>Nestle Original Coffee-Mate</h4>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price'>RS 150</span>
                                    <del className='oldprice'> RS 200</del>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </div>
    </div>
  )
}
