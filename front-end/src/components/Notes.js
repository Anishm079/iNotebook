import React, { useContext, useEffect, useRef , useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const [note, setNote] = useState({id:"", title:"",description:"",tag:"default"})
  const { notes, getNotes ,editNote } = useContext(noteContext);
  // console.log(notes)
  const navigate =useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else {
      navigate('/login')
    }
  }, []);

  const ref = useRef(null);
  const closeRef = useRef(null);

  const updateNote = (note) => {
    ref.current.click();
    setNote({...note,id:note._id})
  };


  const handleOnClick=(e)=>{
      e.preventDefault();
      editNote(note.id,note.title , note.description , note.tag)
      setNote({title:"",description:"",tag:""})
      closeRef.current.click()
      console.log(props)
      props.showAlert("Note is Updated Successfully","Success")
  }

  const handleOnChange=(e)=>{
      setNote({...note,
              [e.target.name]:e.target.value
          })
  }

  return (
    <div className="container my-3">
      <AddNote showAlert={props.showAlert} />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        ref={ref}
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    aria-describedby="emailHelp"
                    value={note.title}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={handleOnChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" disabled={ note.title.length<5 || note.description.length<5 } onClick={handleOnClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">Your Note</h2>
      <div className="row my-3 container">
        {!notes.length && <h5>No Notes To Display</h5>}
        {notes.map((note) => {
          return (
            <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
