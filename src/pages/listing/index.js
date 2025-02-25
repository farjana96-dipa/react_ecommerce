import React, {useState} from 'react'
import './listing.css'
import Sidebar from '../../components/sidebar/index.js'
import Product from '../../components/product/index.js'

export default function Listing() {

const [show, setShow] = useState(false);

const [show2, setShow2] = useState(false);


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
              <div className='col-md-3 left_content'>
                <div className='sidebar_section'>
                  <Sidebar />
                </div>
               
              </div>

              <div className='col-md-9 right_content'>
                <div className='topStrip py-3 d-flex align-items-center'>
                  <p>We are found <strong className='text-success'>29</strong> items for you.</p>
                  <div className='ms-auto'>
                   
                    
                    <div className='d-flex  ms-auto'>
                    <div className='tab '>
                      <button className='btn' onClick={()=>setShow(!show)}><i class="fa-solid fa-eye me-2"></i> Show: 50</button>
                          {
                            show && 
                            <div className='dropdown'>
                              <ul>
                                <li>Show: 20</li>
                                <li>Show: 30</li> 
                                <li>Show: 40</li>
                                <li>Show: 50</li>
                                <li>Show: 60</li>
                              </ul>
                            </div>
                          }
                    
                    </div>

                    <div className='tab ms-auto'>
                      <button className='btn' onClick={()=>setShow2(!show2)}><i class="fa-solid fa-list me-2"></i> Filter By: Featured</button>

                      {
                            show2 && 
                            <div className='dropdown2'>
                              <ul>
                                <li>Featured</li>
                                <li>Best Selling</li> 
                                <li>Price: Low to High</li>
                                <li>Price: High to Low</li>
                              </ul>
                            </div>
                      }
                    </div>
                  </div>
                  </div>
                  
                </div>
                <div className='productRow'>
                  <div className='item'>
                    <Product />
                  </div>

                  <div className='item'>
                    <Product />
                  </div>

                  <div className='item'>
                    <Product />
                  </div>

                  <div className='item'>
                    <Product />
                  </div>

                  <div className='item'>
                    <Product />
                  </div>

                 
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
