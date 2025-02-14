import React, { Component, useEffect, useState } from 'react'
import Select from '../selectCat/select.js';
import './header.css'
import logo from '../../assets/images/logo.jpeg'

import Nav from './nav/nav.js'

import axios from 'axios'

export default function Header(){

const [Categories, setCategories] = useState([
 
  'Wines & Drinks',
  'Fresh SeaFood',
  'Fast Food',
  'Baking Materials',
  'Vegetables',
  'Bread & Juice',
  'Pet Foods & Toy',
  'Clothing & Beauty',
  'Electronics',
  'Groceries',
  'Wellness',
  'Jwellery',
  'Costmetics'
]);


const countryList = [];

useEffect(()=>{
  getCountry('https://countriesnow.space/api/v0.1/countries/');
})

const getCountry = async(url)=>{
    try{
       await axios.get(url).then((res)=>{
        if(res!=null){
          res.data.data.map((item,index)=>{
            countryList.push(item.country);
            console.log(item.country);
          })
         
        }
       })
    }catch(e){
      console.log(e.message);
    }
}


const [myAccount, setmyAccount] = useState(false);


const openAccount = ()=>{
  setmyAccount(!myAccount);
}

    return (
      <header>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={logo}></img>
               </div>


                <div className='col-md-4'>
                    <div className='head_search '>
                        <div className='select_drop'>
                         
                        <Select data={Categories} placeholder={'All Categories'} />
                        </div>
                       
                        <div className='search'>
                            <input type='text' placeholder='search for items...' />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                     </div>
                </div>

                <div className='col-md-2 d-flex align-items-center'>
                 
                      <div className='locationSearch'>
                        <div className='locationResult'>
                        <Select data={countryList} placeholder={'Your Location'}/>
                        </div>
                      </div>

                  </div>
                      <div className='col-md-4'>
                                  <div className='headerList d-flex'>
                                      <div className='listItem'>
                                        <i class="fa-solid fa-code-compare"></i>
                                        <span className='badge bg-success rounded-circle listBadge'>3</span>
                                        <span className='listText'>Compare</span>
                                      </div>

                                      <div className='listItem'>
                                      <i class="fa-regular fa-heart"></i>
                                        <span className='badge bg-success rounded-circle listBadge'>5</span>
                                        <span className='listText'>Wishlist</span>
                                      </div>

                                      <div className='listItem'>
                                      <i class="fa-solid fa-cart-shopping"></i>
                                        <span className='badge bg-success rounded-circle listBadge'>2</span>
                                        <span className='listText'>Cart</span>
                                      </div>

                                      <div className=' myListItem' onClick={openAccount}>
                                      <i class="fa-regular fa-user"></i>
                                        
                                      <span className='listText1'>My Account</span>

                                    {
                                      myAccount === true && 
                                    
                                        <ul className='account'>
                                          <li className='accountItem'><a src="#"><i class="fa-regular fa-user"></i>My Account</a></li>
                                          <li className='accountItem'><a src="#"><i class="fa-solid fa-arrow-up-wide-short"></i>Order Tracking</a></li>
                                          <li className='accountItem'><a src="#"><i class="fa-regular fa-heart"></i>My Wishlist</a></li>
                                          <li className='accountItem'><a src="#"><i class="fa-solid fa-gear"></i>Settings</a></li>
                                          <li className='accountItem'><a src="#"><i class="fa-solid fa-right-from-bracket"></i> sign Out</a></li>
                                        </ul>
                                      
                                    }
                                     
                                     </div>
                                  </div>   


                      </div>  
                </div>

               


            </div>

           
                  <Nav />
             
      </header>
    )
  }

