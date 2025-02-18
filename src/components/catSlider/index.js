import React, { useState } from "react";
import Slider from "react-slick";
import './cat.css'
import img1 from '../../assets/images/file_1734525204708_fash.png'
import img2 from '../../assets/images/file_1734525239704_foot.png'
import img3 from '../../assets/images/file_1734525286186_jw.png'
import img4 from '../../assets/images/file_1734525218436_ele.png'
import img5 from '../../assets/images/file_1734525248057_gro.png'
import img6 from '../../assets/images/file_1734525255799_beauty.png'

export default function SimpleSlider() {

const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
])

const [img, setImg] = useState([
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
])



  var settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1
  };
  return (
    <section className="catSlider">
    <div className="container-fluid">
        <div className="row">
                <div className="col-md-12">
        
        <h3>Featured Categories</h3>
        <Slider {...settings} className="cat-slider">

                {
                        itemBg.length!=0 && itemBg.map((item,index)=>{
                                return(
                                        <div className="item1" >
                                                <div className="item1_info" style={{background: item}}>
                                                        <img src={img1} alt="sliderimage" />
                                                        <h4>Vegetables</h4>
                                                        <p>14 items</p>
                                                </div>
                                        </div>
                                )
                        }) 
                }
               

                {/*<div className="item">

                        <img src={img2} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Man's Shoes</h4>
                        <p>30 items</p>
                        </div>
                
                
                </div>

                <div className="item">
                
                        <img src={img3} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Jwellery Items</h4>
                        <p>25 items</p>
                        </div>
                
                
                </div>

                <div className="item">
        
                        <img src={img4} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Electronics</h4>
                        <p>20 items</p>
                        </div>
                
                
                </div>

                <div className="item">
                
                        <img src={img5} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Groceries</h4>
                        <p>18 items</p>
                        </div>
                
                
                </div>

                <div className="item">
        
                        <img src={img6} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Cosmetics</h4>
                        <p>35 items</p>
                        </div>
                
                
                </div>
                <div className="item">
                
                        <img src={img3} alt="sliderimage" />
                        <div className="item_info">
                        <h4>Jwellery Items</h4>
                        <p>25 items</p>
                        </div>
                
                
                </div>

 
              
                <div className="item">
                
                <img src={img6} alt="sliderimage" />
                <div className="item_info">
                <h4>Cosmetics</h4>
                <p>35 items</p>
                </div>

                
                </div>

                <div className="item">
                
                <img src={img5} alt="sliderimage" />
                <div className="item_info">
                <h4>Groceries</h4>
                <p>18 items</p>
                </div>
        
        
                 </div>


                <div className="item">

                <img src={img2} alt="sliderimage" />
                <div className="item_info">
                <h4>Man's Shoes</h4>
                <p>30 items</p>
                </div>


                </div>*/}

        </Slider>
                        
        </div>
        </div>
    </div>
    </section>
  );
}
