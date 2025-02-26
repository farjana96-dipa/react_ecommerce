import React from 'react'
import './details.css'

import { Rating } from '@mui/material';

import pImage from '../../assets/images/girl.png'

import InnerImageZoom from 'react-inner-image-zoom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick'

import {useRef, useState} from 'react'

{/*import img1 from '../../assets/images/file_1734526125947_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp'
import img2 from '../../assets/images/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp'      
import img3 from '../../assets/images/file_1734526629721_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp'
import img4 from '../../assets/images/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg'
import img5 from '../../assets/images/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg'*/}


export default function ProductDetails() {

    const zoomSlider = useRef();

    const [zoomImage, setZoomImage] = useState('https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg');

    const [bigImage, setbigImage] = useState(1500,1500);
    const [smallImage, setSmallImage] = useState(500,500);

    const [active, setActive] = useState(0);
    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      };

      const goTo = (url) =>{
        setZoomImage(url);
      }

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
                                    <InnerImageZoom src={`${zoomImage}?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} zoomSrc={`${zoomImage}`} zoomType="hover" zoomScale={1.2} />
                                </div>

                                        <div className='zoomSlider' >
                                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>


                                                <div className="item2" >
                                                    <div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg')}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg')}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg')} />
                                                    </div>
                                                </div>


                                                {/*<div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`${img4}?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('../../assets/images/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg')}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`${img5}?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('../../assets/images/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg')}/>
                                                    </div>
                                                </div>*/}


                                            </Slider>



                                        </div>
                            </div>

                         

                        <div className='col-md-7'>
                            <div className='productDetails'>
                                <h2>Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)</h2>
                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                 <span className='review'>(32 Reviews)</span>

                                <div className='d-flex align-items-center justify-content-space-between'>
                                        <div className='d-flex align-items-center'>
                                            <p className='price'>RS 150</p>
                                            <div className=' discountPrice'>
                                                <span className='discount'>20% off</span>
                                                <p className='oldprice'> RS 200</p>
                                            </div>
                                            
                                        </div>
                                    
                                </div>

                                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <div className='d-flex align-items-center my-3'>
                                    <h4>Size: </h4>
                                    <ul class="list-group list-group-horizontal ms-2 filterTabs">
                                        <li class="list-group-item"><a href='#' onClick={!active}>S</a></li>
                                        <li class="list-group-item"><a>M</a></li>
                                        <li class="list-group-item"><a>L</a></li>
                                        <li class="list-group-item"><a>XL</a></li>
                                        <li class="list-group-item"><a>XXL</a></li>
                                    </ul>
                                </div>

                                <div className='d-flex align-items-center my-3'>
                                    <h4>Weight: </h4>
                                    <ul class="list-group list-group-horizontal ms-2 filterTabs">
                                        <li class="list-group-item"><a href='#'>3kg</a></li>
                                        <li class="list-group-item"><a>4kg</a></li>
                                        <li class="list-group-item"><a>5kg</a></li>
                                        
                                    </ul>
                                </div>


                                <p className='my-3 gray'>Availability: <strong className='black'>In Stock</strong></p>
                                <p className='my-3 gray'>Brand: <strong className='black'>Fashion</strong></p>
                               
                                <button className='btn btn-success my-3'>Add to Cart</button>
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
