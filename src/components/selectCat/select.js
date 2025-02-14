import React  from 'react'
import { useState, useEffect } from 'react'
import './select.css'

function Select({data,placeholder}){

    const [isOpenSelect, setisOpenSelect] = useState(false);

    const [selectedIndex, setselectedIndex] = useState(0);

    const [selectedItem, setselectedItem] = useState(placeholder);

    const [listItem, setlistItem] = useState(data);
    const [listItem2, setlistItem2] = useState(data);

    const openSelectfun = ()=>{
        setisOpenSelect(!isOpenSelect);
    }

    const closeIndex = (index, name)=>{
        
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }

    const filterList = (e)=>{
      const keyword = e.target.value.toLowerCase();
      
     const filteredList = listItem2.filter((item,index,self)=> index === self.findIndex((t)=>(
      t.toLowerCase() === item.toLowerCase()
     )));


     const list = filteredList.filter((item)=>{
        return item.toLowerCase().includes(keyword)
     })

      setlistItem(list);
    }

    return (
      <div className='selectDropWrapper'>
        <span className='py-3 openSelect' onClick={openSelectfun}>{selectedItem.length > 14 ? selectedItem.substr(0,14)+ '...' : selectedItem} <i class="fa-solid fa-angle-down sicon"></i></span>
        {
            isOpenSelect === true && 
            <div className='selectDrop'>
        <div className='search_field'>
            <input type='text' placeholder='search here...' onChange={filterList}/>
            </div>
            <ul className='search_result'>
            <li key='0' onClick={()=>closeIndex(0, placeholder)} className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}</li>
                {
                  listItem.map((item,index)=>(
                        <li key={index+1} onClick={()=>closeIndex(index+1, item)} className={`${selectedIndex === index+1 ? 'active' : ''}`}>{item}</li>
                  ))
                }

              
            </ul>
           </div>
        }
      </div>
    )
  
}

export default Select