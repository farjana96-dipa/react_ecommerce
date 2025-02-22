import React, { Component } from 'react'
import './footer.css'
import logo from '../../assets/images/logo.jpeg'
import image1 from '../../assets/images/icon-1.5b1776e2a1d7ec897722f605a8118984.svg'
import image2 from '../../assets/images/icon-2.622b96aa8375916171721496261f6986.svg'
import image3 from '../../assets/images/icon-3.a41b48d5c6678b96129a842057548c86.svg'
import image4 from '../../assets/images/icon-4.84d7a8a08622e302a2d50459d2cddb62.svg'


export default class footer extends Component {
  render() {
    return (
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='d-flex align-items-center iconbox'>
                <img src={image1} alt="image1" />
                <div className='info'>
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex align-items-center iconbox'>
                <img src={image2} alt="image1" />
                <div className='info'>
                  <h4>Free delivery</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex align-items-center iconbox'>
                <img src={image3} alt="image1" />
                <div className='info'>
                  <h4>Great daily deal</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex align-items-center iconbox'>
                <img src={image4} alt="image1" />
                <div className='info'>
                  <h4>Wide assortment</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>


          </div>
          <div className='row py-5'>
            <div className='col-md-3'>
              <div className='box'>
                <img src={logo} alt='Logo' />
                <p>Awesome grocery store website template</p>
                <div className='d-flex align-items-center ebox'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Address: <span className="gray">5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></p>
                </div>
                <div className='d-flex align-items-center ebox'>
                <i class="fa-solid fa-tty"></i>
                    <p>Call Us: <span className="gray">+8801518930507</span></p>
                </div>
                <div className='d-flex align-items-center ebox'>
                <i class="fa-solid fa-envelope"></i>
                    <p>Email: <span className="gray">farjana96455@gmail.com</span></p>
                </div>

                <div className='d-flex align-items-center ebox'>
                <i class="fa-solid fa-clock"></i>
                    <p>Hours: <span className="gray">10:00 - 18:00, Mon - Sat</span></p>
                </div>
              </div>
            </div>
            <div className='col-md-3 part'>
              <h4>Company</h4>
              <ul className='ulist'>
                <li><a>About Us</a></li>
                <li><a>Delivery Information</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms & Conditions</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Support Center</a></li>
                <li><a>Careers</a></li>
              </ul>
            </div>
            <div className='col-md-3 part'>
              <h4>Corporate</h4>
                <ul className='ulist'>
                  <li><a>About Us</a></li>
                  <li><a>Delivery Information</a></li>
                  <li><a>Privacy Policy</a></li>
                  <li><a>Terms & Conditions</a></li>
                  <li><a>Contact Us</a></li>
                  <li><a>Support Center</a></li>
                  <li><a>Careers</a></li>
                </ul>
            </div>
            <div className='col-md-3 part'>
              <h4>Popular</h4>
                <ul className='ulist'>
                  <li><a>About Us</a></li>
                  <li><a>Delivery Information</a></li>
                  <li><a>Privacy Policy</a></li>
                  <li><a>Terms & Conditions</a></li>
                  <li><a>Contact Us</a></li>
                  <li><a>Support Center</a></li>
                  <li><a>Careers</a></li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
