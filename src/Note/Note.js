import React from 'react';
import './Note.css';

let timer=500,timeout
function Note(props) {

  const formatDate=(value)=>{
    
    const date=new Date(value)
    const months=["Jan","Feb","March","April","May","June","July","August","September","October","Nov","Dec"];

    let hrs=date.getHours();
    let ampm=hrs<12? "AM" : "PM";
    console.log(ampm,hrs);
    hrs=hrs?hrs:"12";
    hrs=hrs>12?(hrs=hrs-12):hrs;
    
    let min=date.getMinutes(); 
    min=min<10?"0"+min:min;
    let day=date.getDate();
    const month=months[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`;

  }

  
   
  return (
    <div  className="note" style={
      {backgroundColor:props.note.color}}>
        <textarea className="note_text" defaultValue={props.note.text}
       
        />
        <div className='delete'>
        <p>{formatDate(props.note.time)}</p>
        <img src="https://simg.nicepng.com/png/small/334-3348448_google-received-delete-icon-png-transparent.png" alt="Delete"
        onClick={()=>props.deleteNote(props.note.id)}
        />
        </div>
       
    </div>
  )
}

export default Note