import React, { useState } from 'react'
import AncientCard from './AncientCard'



const CardContainer = ({data, search}) => {
  
  return (
    
      
    <div className='cardContainer'>
        {data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase().trim())).map((item)=>(
 <AncientCard {...item}/>
        ))}
        
    </div>
    
  )
}

export default CardContainer