import React, { useState } from 'react';
import './sidebar.css'
import img from '../../assets/images/icon-1.5b1776e2a1d7ec897722f605a8118984.svg'
import img1 from '../../assets/images/icon-2.622b96aa8375916171721496261f6986.svg'
import img2 from '../../assets/images/icon-3.a41b48d5c6678b96129a842057548c86.svg'
import img3 from '../../assets/images/icon-4.84d7a8a08622e302a2d50459d2cddb62.svg'
import banner1 from '../../assets/images/banner.png'

import Slider from '@mui/material/Slider';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function valuetext(value) {
  return `${value}°C`;
}

export default function Sidebar() {

  const [value, setValue] = useState([20, 37]);  // ✅ Now React recognizes this as a valid component

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sidebarWrapper'>
    <div className='sidebar'>

      <div className='cards'>
          <h3>Category</h3>

          <div class="catList" >
          <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={img} width={30}/></span>
              <h4 className='ms-2'>Milk & Dairies</h4>
              <span className='d-flex align-items-center rounded-circle bdge ms-auto'>30</span>
          </div> 
        </div>

        <div class="catList" >
          <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={img1} width={30}/></span>
              <h4 className='ms-2'>Drinks and Water</h4>
              <span className='d-flex align-items-center rounded-circle bdge ms-auto'>15</span>
          </div> 
        </div>


        <div class="catList" >
          <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={img2} width={30}/></span>
              <h4 className='ms-2'>Fashion and Cosmetics</h4>
              <span className='d-flex align-items-center rounded-circle bdge ms-auto'>45</span>
          </div> 
        </div>


        <div class="catList" >
          <div className='catItem d-flex align-items-center'>
              <span className='img'><img src={img3} width={30}/></span>
              <h4 className='ms-2'>Electronic Accessories</h4>
              <span className='d-flex align-items-center rounded-circle bdge ms-auto'>20</span>
          </div> 
        </div>

      </div>


      <div className='cards'>
          <h3>Price</h3>

            <div className="catList1" >
                <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                min={0}
                step={1}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />

              <div className='d-flex align-items-center'>
                <span className='price'>From: <strong>${value[0]}</strong></span>
                <span className='price ms-auto'>To: <strong>${value[1]}</strong></span>
              </div>

              <div className='filters'>
                <h5>Colors</h5>
                <ul>
                  <li><Checkbox {...label} color='success'/>Red (56) </li>
                  <li><Checkbox {...label} color='success'/>Blue (45)</li>  
                  <li><Checkbox {...label} color='success'/>Green (30)</li>
                  <li><Checkbox {...label} color='success'/>Yellow (20)</li>  
                  <li><Checkbox {...label} color='success'/>Red (56) </li>
                  <li><Checkbox {...label} color='success'/>Blue (45)</li>  
                  <li><Checkbox {...label} color='success'/>Green (30)</li>
                  <li><Checkbox {...label} color='success'/>Yellow (20)</li>  
                  <li><Checkbox {...label} color='success'/>Red (56) </li>
                  <li><Checkbox {...label} color='success'/>Blue (45)</li>  
                  <li><Checkbox {...label} color='success'/>Green (30)</li>
                  <li><Checkbox {...label} color='success'/>Yellow (20)</li>  

                </ul>
              </div>



              <div className='filters'>
                <h5>Items Condition</h5>
                <ul>
                  <li><Checkbox {...label} color='success'/>New (25) </li>
                  <li><Checkbox {...label} color='success'/>Refurbished (35)</li>  
                  <li><Checkbox {...label} color='success'/>Used (50)</li>
                  <li><Checkbox {...label} color='success'/>New (25) </li>
                  <li><Checkbox {...label} color='success'/>Refurbished (35)</li>  
                  <li><Checkbox {...label} color='success'/>Used (50)</li>
                  <li><Checkbox {...label} color='success'/>New (25) </li>
                  <li><Checkbox {...label} color='success'/>Refurbished (35)</li>  
                  <li><Checkbox {...label} color='success'/>Used (50)</li>
                  <li><Checkbox {...label} color='success'/>New (25) </li>
                  <li><Checkbox {...label} color='success'/>Refurbished (35)</li>  
                  <li><Checkbox {...label} color='success'/>Used (50)</li>

                </ul>
              </div>

                <button className='btn btn-success w-100'>Filter</button>

            </div>
      </div>
      </div>

     
    </div>
  )
}
