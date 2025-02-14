import React from 'react'
import './nav.css'

import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const nav = () => {
  return (
    <div className='nav my-3'>
        <div className='container-fluid'>
         <div className='row'>
            <div className='col-sm-2 part1 d-flex align-items-center'>
            
            <button className='btn btn-success'><i class="fa-solid fa-list"></i>Browse All Categories <i class="fa-solid fa-angle-down sicon"></i></button>
           
            </div>
            <div className='col-sm-8 part2 d-flex align-items-center'>
              <nav className=''>
                <ul className='list list-inline mb-3'>
                  <li className='list-inline-item'>
                    <Button ><Link>Home</Link></Button>
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>About</Link></Button>
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>Shop</Link></Button>
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>Blogs</Link></Button>
                  </li>

                  <li className='list-inline-item pages'>
                    <Button><Link>Pages <i class="fa-solid fa-angle-down sicon"></i></Link></Button>
                    
                      <ul className='dropdown_menu'>
                        <li><Link>About Us</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>My Account</Link></li>
                        <li><Link>Login</Link></li>
                        <li><Link>Register</Link></li>
                        <li><Link>Forget Password</Link></li>
                        <li><Link>Reset Password</Link></li>
                        <li><Link>Purchase Guide</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms & Conditions</Link></li>
                      </ul>
                    
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>Products</Link></Button>
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>Mega Menu</Link></Button>
                  </li>

                  <li className='list-inline-item'>
                    <Button><Link>Contact Us</Link></Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-sm-2 part3 d-flex align-items-center' >
                <div className='phoneNumber d-flex'>
                      <i class="fa-solid fa-phone"></i> 
                      <div className='secondPart'>
                          <p className='phoneText'>+8801518930507</p>
                          <p>24/7 Support</p>
                        </div>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default nav
