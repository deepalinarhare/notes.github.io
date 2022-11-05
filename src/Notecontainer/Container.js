import React from 'react'
import Note from '../Note/Note'
import './container.css'
function Container(props) {

    const reverArray=(arr)=>{
        const array=[]

        for(let i=arr.length-1;i>=0;i--){
            array.push(arr[i])
        }
        return array
    };

    const notes=reverArray(props.notes);
  return (
    <div className='container'>
        <h2>Notes</h2>
        <div className='notes'>
            {
                notes.map((item)=>(
                <Note 
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
                />))
            }
       


        </div>
    </div>
  )
}

export default Container