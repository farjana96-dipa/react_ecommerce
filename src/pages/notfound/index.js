import React from 'react'
import './notfound.css'

import img1 from '../../assets/images/last.avif'

export default function Notfound() {
  return (
    <div className='notFound'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='not'>
                <img src={img1} alt='404' />
                <h2>Page Not Found</h2>
                <p>Sorry, but the page you were trying to view does not exist.</p>
                <button className='btn btn-success' onClick={() => window.history.back()}> Go Back <i class="fa-solid fa-arrow-right-long ms-2"></i></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
