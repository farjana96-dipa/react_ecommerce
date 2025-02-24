import React from 'react'
import './listing.css'
import Sidebar from '../../components/sidebar/index.js'

export default function listing() {
  return (
    <div className='listing_page'>
        <div className='container-fluid py-5'>
            <div className='row'>
                <div className='col'>
                    <div className='box'>
                      <h2>Snaks</h2>
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                          </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='row'>
              <div className='col-md-3'>
                <div className='sidebar_section'>
                  <Sidebar />
                </div>
               
              </div>
            </div>
        </div>
    </div>
  )
}
