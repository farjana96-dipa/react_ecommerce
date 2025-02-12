import React, { Component } from 'react'

import './header.css'
import logo from '../../assets/images/logo.jpeg'

export default class header extends Component {
  render() {
    return (
      <header>
        <div className='container fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={logo}></img>
               </div>


                <div className='col-md-5'>
                    <div className='head_search '>
                        <div className='select_drop'>
                            All Categories
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='search for items...'/>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                     </div>
                </div>
              
            </div>
        </div>
      </header>
    )
  }
}
