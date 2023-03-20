import React, { useContext ,useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleOnClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
        props.showAlert("Note Is Added Successfully","Success"); 
    }

    const handleOnChange=(e)=>{
        setNote({...note,
                [e.target.name]:e.target.value
            })
    }

  return (
    <div className="container">
      <h2 className="my-3">Add a Note</h2>
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
          <textarea
            className="form-control "
            id="description"
            name="description"
            style={{height:"20vh"}}
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

        <button type="submit" className="btn btn-primary" onClick={handleOnClick} disabled={ note.title.length<5 || note.description.length<5 } >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
