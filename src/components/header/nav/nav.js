import React, { useState } from 'react';
import './nav.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MegaImage from '../../../assets/images/file_1734525634299_NewProject(2).jpg'

const Nav = () => {
  // State for mega menu visibility
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPagesOpen, setisPagesOpen] = useState(false);

  return (
    <div className="nav my-3 ">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-sm-2 part1 d-flex align-items-center ">
            <button className="btn btn-success">
              <i className="fa-solid fa-list"></i> Browse All Categories
              <i className="fa-solid fa-angle-down sicon"></i>
            </button>
          </div>

          {/* Center Section - Navigation */}
          <div className="col-sm-8 part2 d-flex align-items-center position-relative">
            <nav>
              <ul className="list list-inline mb-3">
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/about">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/shop">Shop</Link>
                  </Button>
                </li>

                {/* Mega Menu */}
                <li
                  className="list-inline-item  mega-menu-parent"
                  onClick={()=> setIsMegaMenuOpen(!isMegaMenuOpen)}
                >
                  <Button>
                    <Link to="#">Mega Menu <i className="fa-solid fa-angle-down sicon"></i></Link>
                  </Button>

                  {isMegaMenuOpen && (
                    <div className="dropdown_menu mega_menu">
                      <div className='container'>
                      <div className="row">
                      
                          <div  className="col-md-3 col-sm-6">
                            <h3>Foods & Drinks</h3>
                            <ul>
                              <li>
                                <Link to="/about-us">Vegetables</Link>
                              </li>
                              <li>
                                <Link to="/contact-us">Fast Food</Link>
                              </li>

                              <li>
                                <Link to="/contact-us">Fresh Frozen Foods</Link>
                              </li>

                              <li>
                                <Link to="/contact-us">Dairy & Chocolate</Link>
                              </li>

                              <li>
                                <Link to="/contact-us">Milk and Coffee</Link>
                              </li>
                              
                             
                          </ul>
                          </div>


                          <div  className="col-md-3 col-sm-6">
                            <h3>My Account Info</h3>
                            <ul>
                              <li>
                                <Link to="/about-us">About Us</Link>
                              </li>
                              <li>
                                <Link to="/contact-us">Contact Us</Link>
                              </li>
                              <li>
                                <Link to="/account">My Account</Link>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                              <li>
                                <Link to="/register">Register</Link>
                              </li>
                              
                            </ul>
                          </div>


                          <div  className="col-md-3 col-sm-6">
                            <h3>Account Reset Info</h3>
                            <ul>
                             
                              <li>
                                <Link to="/forgot-password">Forget Password</Link>
                              </li>
                              <li>
                                <Link to="/reset-password">Reset Password</Link>
                              </li>
                              <li>
                                <Link to="/guide">Purchase Guide</Link>
                              </li>
                              <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                              </li>
                              <li>
                                <Link to="/terms">Terms & Conditions</Link>
                              </li>
                            </ul>
                          </div>

                          <div className='col-md-3 col-sm-6'>
                            <img src={MegaImage} alt='mega_menu_image' className='mega_img'/>
                          </div>
                        
                      </div>
                    </div>
                    </div>
                  )}
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link to="/blogs">Blogs</Link>
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link to="/products">Products</Link>
                  </Button>
                </li>

                {/* Pages Dropdown */}
                <li className="list-inline-item pages position-relative" onClick={()=> setisPagesOpen(!isPagesOpen)}>
                  <Button>
                    <Link to="#">
                      Pages <i className="fa-solid fa-angle-down sicon"></i>
                    </Link>
                  </Button>
                  {isPagesOpen && (
                        <ul className="dropdown_menu">
                        <li>
                          <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/account">My Account</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/forgot-password">Forget Password</Link>
                        </li>
                        <li>
                          <Link to="/reset-password">Reset Password</Link>
                        </li>
                        <li>
                          <Link to="/guide">Purchase Guide</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms & Conditions</Link>
                        </li>
                      </ul>

                  )}
                
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Section */}
          <div className="col-sm-2 part3 d-flex align-items-center position-static">
            <div className="phoneNumber d-flex">
              <i className="fa-solid fa-phone"></i>
              <div className="secondPart">
                <p className="phoneText">+8801518930507</p>
                <p>24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
