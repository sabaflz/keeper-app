import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
      title: "",
      content:""
    });

  function updateNote(event){
      const {name, value} = event.target;
      setNote(prevNotes => {
          return {
              ...prevNotes,
              [name]: value
          };
        });
    }

  function passNote(event){
      props.onAdd(note);
      setNote({title: "", content:""});
      //by default when the add button is clicked, it refreshes the page
      event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input 
            onChange={updateNote} 
            name="title" 
            value={note.title} 
            placeholder="Title"
        />

        <textarea 
            onChange={updateNote} 
            name="content" 
            value={note.content} 
            placeholder="Take a note..." 
            rows="3"
        />

        <button onClick={passNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
