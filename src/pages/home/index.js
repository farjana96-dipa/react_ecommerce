import React from 'react'
import './style.css'
import Slider from './slider/index.js'
import CatSlider  from '../../components/catSlider/index.js'

const home = () => {
  return (
    <div className='home_page'>
      <Slider />
      <CatSlider />
    </div>
  )
}

export default home
