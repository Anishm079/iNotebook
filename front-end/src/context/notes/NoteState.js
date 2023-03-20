import NoteContext from "./noteContext";
import { useState } from "react";

// import dotenv from 'dotenv';
// dotenv.config();

const NoteState = (props) => {

  const host = "https://inotebook-nodejs-backend.onrender.com"

  const initNotes = [];

  const [notes, setNotes] = useState(initNotes);


  //getNotes
  const getNotes=async ()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      }
    })
    const json = await response.json()
    // console.log(json) 
    setNotes(json)
  }

  //add Note
  const addNote=async (title,description,tag)=>{

    const response = await fetch(`${host}/api/notes/addNotes`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag})
    })
    
    // getNotes()
    const json = await response.json()
    console.log(json._id)

    const note={
      "_id": json._id,
      "user": json.user,
      "title": title,
      "description": description,
      "tag": tag,
      "date": new Date(),
      "__v": 0,
    }

    setNotes(notes.concat(note))

  }

  //delete Note

  const deleteNote=async (id)=>{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      }
    })
    const json = await response.json()
    console.log(id)
    const newNotes=notes.filter(nt=>nt._id!==id)
    setNotes(newNotes)
  }

  //edit Note

  const editNote=async (id,title,description,tag)=>{

    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag}) 
    })
    const json = await response.json()
    let newNote=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if(element._id===id){
        newNote[index].title = title
        newNote[index].description = description
        newNote[index].tag = tag
        break;
      }
      
    }

    setNotes(newNote)
  }

  return (
    <NoteContext.Provider value={{ notes,setNotes, addNote ,deleteNote ,editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
