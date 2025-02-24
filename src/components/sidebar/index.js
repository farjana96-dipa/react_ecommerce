import React from 'react'
import './sidebar.css'
import img from '../../assets/images/icon-1.5b1776e2a1d7ec897722f605a8118984.svg'

export default function sidebar() {
  return (
    <div className='sidebar'>
     <h3>Category</h3>

        <div class="card" style="width: 18rem;">
         
          <div class="card-body">
            <span className='img'><img src={img} /></span>
            <h5 class="card-title">Milk & Dairies</h5>
            <span className='d-flex align-items-center rounded-circle badge ms-auto'>30</span>
          </div>
        </div>


    </div>
  )
}
