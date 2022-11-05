import React from 'react'
import './sidebar.css'
function Sidebar(props) {
    const colors=['green','gray','yellow',"pink"]
    
    
  return (
   <div className='sidebar'>
    <img src="https://www.freeiconspng.com/thumbs/plus-icon/add-create-new-plus-icon-20.png" alt="add" />
    <ul className='sidebar_list'>
        {
            colors.map((item,index)=>
             <li 
             style={({backgroundColor:item})}
             onClick={()=>props.addNote(item)}
             key={index}
             className='sidebar_item'/>)
        }
        
    </ul>
   </div>
  )
}

export default Sidebar