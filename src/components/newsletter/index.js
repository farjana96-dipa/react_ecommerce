import React from 'react'
import './news.css'

export default function Newsletter() {
  return (
    <div >
        <div className='newsletter '>
            <i class="fa-solid fa-paper-plane news-icon"></i>
            <input type='text' placeholder='Enter Your Email' />
            <button className='btn news-btn pull-right'>Submit</button>
        </div>
    </div>
  )
}
