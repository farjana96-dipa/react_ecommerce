import React from 'react'
import './product.css'
import img from '../../assets/images/file_1734774478545_1017934b-ebb7-4394-ab4e-8033671295541721124227083ASTEROIDMenColourblockedSuedeSneakers1.jpg'

const product = () => {
  return (
    <div className='productThumb'>
        <div className='imgWrap'>
            <img src={img} alt='product_img'/>
        </div>
    </div>
  )
}

export default product
