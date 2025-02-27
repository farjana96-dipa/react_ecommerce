import React from 'react'
import './details.css'

import { Rating } from '@mui/material';

import pImage from '../../assets/images/girl.png'

import InnerImageZoom from 'react-inner-image-zoom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick'

import {useRef, useState} from 'react'

import userImg1 from '../../assets/images/file_1734527612715_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp'


import Product from '../../components/product/index.js'


import Sidebar from '../../components/sidebar/index.js'

export default function ProductDetails() {

    const zoomSlider = useRef();

    const [zoomImage, setZoomImage] = useState('https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg');

    const [bigImage, setbigImage] = useState(1500,1500);
    const [smallImage, setSmallImage] = useState(500,500);


    const [activeSize, setActiveSize] = useState(0);

    const [activeWeight, setActiveWeight] = useState(0);

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () =>{
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    }

    const handleIncrease = () =>{
        setQuantity(quantity + 1);
    }

    const isActiveWeight = (index) =>{
        setActiveWeight(index);
    }

    const isActiveSize = (index) =>{
        setActiveSize(index);
    }


    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      };

      const goTo = (url,index) =>{
        setTimeout(()=>{
            setZoomImage(url);
        },500)

        zoomSlider.current.slickGoTo(index);
      }


      const [activeTabs, setActiveTabs] = useState(1);

      const goToValue = (index) =>{
        setActiveTabs(index);
      }


      var settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite:true,
        slidesToShow: 6,
        slidesToScroll: 1
        
    };


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
                    <div className='row pb-5' >
                            <div className='col-md-5 productZoom'>
                                <div className='productImg'>
                                    <InnerImageZoom src={`${zoomImage}?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} zoomSrc={`${zoomImage}`} zoomType="hover" zoomScale={1.2} />
                                </div>

                                        <div className='zoomSlider' >
                                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>


                                                <div className="item2" >
                                                    <div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg',0)}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg',1)}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg',2)} />
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
                                <h2 className='my-3'>Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)</h2>
                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                 <span className='review'>(32 Reviews)</span>

                                <div className='d-flex align-items-center justify-content-space-between my-3'>
                                        <div className='d-flex align-items-center'>
                                            <p className='price1'>RS 150</p>
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
                                        <li class="list-group-item"><a href='#' className={`tag ${activeSize===0 ? 'active' : ''}`} onClick={()=>isActiveSize(0)}>S</a></li>
                                        <li class="list-group-item"><a className={`tag ${activeSize===1 ? 'active' : ''}`} onClick={()=>isActiveSize(1)}>M</a></li>
                                        <li class="list-group-item"><a className={`tag ${activeSize===2 ? 'active' : ''}`} onClick={()=>isActiveSize(2)}>L</a></li>
                                        <li class="list-group-item"><a className={`tag ${activeSize===3 ? 'active' : ''}`} onClick={()=>isActiveSize(3)}>XL</a></li>
                                        <li class="list-group-item"><a className={`tag ${activeSize===4 ? 'active' : ''}`} onClick={()=>isActiveSize(4)}>XXL</a></li>
                                    </ul>
                                </div>

                                <div className='d-flex align-items-center my-3'>
                                    <h4>Weight: </h4>
                                    <ul class="list-group list-group-horizontal ms-2 filterTabs">
                                        <li class="list-group-item"><a className={`${activeWeight===0 ? 'active' : ''}`} onClick={()=>isActiveWeight(0)}>3kg</a></li>
                                        <li class="list-group-item"><a className={`${activeWeight===1 ? 'active' : ''}`} onClick={()=>isActiveWeight(1)}>4kg</a></li>
                                        <li class="list-group-item"><a className={`${activeWeight===2 ? 'active' : ''}`} onClick={()=>isActiveWeight(2)}>5kg</a></li>
                                        
                                    </ul>
                                </div>


                                <p className='my-3 gray'>Availability: <strong className='black'>In Stock</strong></p>
                                <p className='my-3 gray'>Brand: <strong className='black'>Fashion</strong></p>
                               
                               <div className='d-flex align-items-center my-3'>
                                    <div className='d-flex align-items-center my-3 quantity'>
                                            <button onClick={handleDecrease}><i class="fa-solid fa-minus"></i></button>
                                            <p>{quantity}</p>
                                            <button onClick={handleIncrease}><i class="fa-solid fa-plus"></i></button>
                                    </div>

                                    <div className='d-flex align-items-center my-3'>    
                                      <button className=' my-3 ms-3 cart1'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                      <button className='wish'><i class="fa-solid fa-heart"></i></button>
                                      <buton className='compare'><i class="fa-solid fa-code-compare"></i></buton>
                                    </div>


                               </div>
                             
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 part2'>
                    <Sidebar />
                </div>
            </div>


  
        <div className='card my-4 p-3'>
            <div className='customTabs'>
                <ul class="list-group list-group-horizontal ms-2 filterTabs">
                    <li class="list-group-item"><a className={`${activeTabs ===0 ? 'active' : ''}`} onClick={()=> goToValue(0)}>Description</a></li>
                    <li class="list-group-item"><a className={`${activeTabs ===1 ? 'active' : ''}`} onClick={()=> goToValue(1)}>Additional Info</a></li>
                    <li class="list-group-item"><a className={`${activeTabs ===2 ? 'active' : ''}`} onClick={()=> goToValue(2)}>Reviews (3)</a></li>
                    
                </ul>
                <br/>

             {
                activeTabs === 0 && 
                <div className='tabContent'>
                    <h4>Where does it come from?</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    <br /><br/>
                    <h4>Where does it come from?</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                </div>


             }


              {
                activeTabs === 1 &&    
                <div className='tabContent'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                        <tbody><tr class="stand-up"><th>Stand Up</th><td><p>35″L x 24″W x 37-45″H(front to back wheel)</p></td></tr><tr class="folded-wo-wheels"><th>Folded (w/o wheels)</th><td><p>32.5″L x 18.5″W x 16.5″H</p></td></tr><tr class="folded-w-wheels"><th>Folded (w/ wheels)</th><td><p>32.5″L x 24″W x 18.5″H</p></td></tr><tr class="door-pass-through"><th>Door Pass Through</th><td><p>24</p></td></tr><tr class="frame"><th>Frame</th><td><p>Aluminum</p></td></tr><tr class="weight-wo-wheels"><th>Weight (w/o wheels)</th><td><p>20 LBS</p></td></tr><tr class="weight-capacity"><th>Weight Capacity</th><td><p>60 LBS</p></td></tr><tr class="width"><th>Width</th><td><p>24″</p></td></tr><tr class="handle-height-ground-to-handle"><th>Handle height (ground to handle)</th><td><p>37-45″</p></td></tr><tr class="wheels"><th>Wheels</th><td><p>12″ air / wide track slick tread</p></td></tr><tr class="seat-back-height"><th>Seat back height</th><td><p>21.5″</p></td></tr><tr class="head-room-inside-canopy"><th>Head room (inside canopy)</th><td><p>25″</p></td></tr><tr class="pa_color"><th>Color</th><td><p>Black, Blue, Red, White</p></td></tr><tr class="pa_size"><th>Size</th><td><p>M, S</p></td></tr></tbody>
                        </table>
                    </div>
                </div>
              }


{
                activeTabs === 2 &&    
                <div className='tabContent'>
                    <h4>Customer questions & answers</h4>
                    <div className='row mt-5'>
                        <div className='col-md-7'>
                            <div className='d-flex align-items-center card mb-3'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className='imgWrap '>
                                        <img src={userImg1} />
                                        </div>
                                        <p className='uname'>User Name</p>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='userReview'>
                                        <p className='date'>02-20-2025</p>
                                        <p className='review'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='rating'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                </div>                       
                            </div>


                            <div className='d-flex align-items-center card p-3 mb-3'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className='imgWrap '>
                                        <img src={userImg1} />
                                        </div>
                                        <p className='uname'>User Name</p>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='userReview'>
                                        <p className='date'>02-20-2025</p>
                                        <p className='review'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='rating'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                </div>                       
                            </div>



                            <div className='d-flex align-items-center card p-3'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className='imgWrap '>
                                        <img src={userImg1} />
                                        </div>
                                        <p className='uname'>User Name</p>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='userReview'>
                                        <p className='date'>02-20-2025</p>
                                        <p className='review'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='rating'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                </div>                       
                            </div>


                            <form className='reviewForm py-4'>
                                <h4>Write a Review</h4>
                                <div className='form-group mb-3'>
                                   <textarea className='form-control' placeholder='write a comment' rows={10} cols={15}/>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <input type='text' className='form-control' placeholder='Enter Your Name'/>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <input type='email' className='form-control' placeholder='Enter Your Email'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-group mb-3' >
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} />
                                </div>

                                <button className='btn btn-success submitBtn'>Submit</button>
                            </form>

                        </div>

                        <div className='col-md-5'>
                            <div className='RatingBox'>
                                <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly />
                                <strong>4.8 out fo 5</strong>
                            </div>

                            <div className='progressBox'>
                                <span className=''>5 Star</span>
                                <div className='progress my-2' style={{width:'85%', height:'20px'}}>
                                    <div className='progress-bar bg-success' style={{width:'75%', height:'20px'}}>70%</div>
                                </div>

                                <span className=''>4 Star</span>
                                <div className='progress my-2' style={{width:'85%', height:'20px'}}>
                                    <div className='progress-bar bg-success' style={{width:'65%', height:'20px'}}>60%</div>
                                </div>


                                <span className=''>3 Star</span>
                                <div className='progress my-2' style={{width:'85%', height:'20px'}}>
                                    <div className='progress-bar bg-success' style={{width:'55%', height:'20px'}}>55%</div>
                                </div>

                                <span className=''>2 Star</span>
                                <div className='progress my-2' style={{width:'85%', height:'20px'}}>
                                    <div className='progress-bar bg-success' style={{width:'45%', height:'20px'}}>40%</div>
                                </div>

                                <span className=''>1 Star</span>
                                <div className='progress my-2' style={{width:'85%', height:'20px'}}>
                                    <div className='progress-bar bg-success' style={{width:'25%', height:'20px'}}>20%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
              }

            </div>
        </div>


        <div className='relatedProducts py-5'>
            <h3>Related Products</h3>
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
  )
}
