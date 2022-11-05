import React,{useEffect, useState} from 'react'
import './App.css';
import Container from './Notecontainer/Container'
import Sidebar from './sidebar/Sidebar'

function App() {
  const[notes,setNotes]=useState(JSON.parse(localStorage.getItem('notes_app')) || []);
 
  const addNote=(color)=>{
    const tempnotes=[...notes]

    tempnotes.push({
      id:Date.now()+""+Math.floor(Math.random()*78),
      text:"",
      time:Date.now(),
      color,
    })
    setNotes(tempnotes);

  }

  

  const deleteNote=(id)=>{
    const tempNotes=[...notes]
    const index=tempNotes.findIndex(item=>item.id==id)
    console.log(id,index);
    tempNotes.splice(index,1);
    setNotes(tempNotes);
  }

  useEffect(()=>{
    localStorage.setItem('notes_app',JSON.stringify(notes))
  },[notes])
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <Container notes={notes} deleteNote={deleteNote}
      
      />
    </div>
  );
}

export default App;
 