import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

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
      {isExpanded && 
        <input 
            onChange={updateNote} 
            name="title" 
            value={note.title} 
            placeholder="Title"
            // type={isExpanded ? "text" : "hidden"}
        />}

        <textarea 
            onClick={() => setExpanded(true)}
            onChange={updateNote} 
            name="content" 
            value={note.content} 
            placeholder="Take a note..." 
            rows={isExpanded ? "3" : "1"}
        />

        {/* Add Floating Action Button */}
        <Zoom in={isExpanded}>
          <Fab onClick={passNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        

      </form>
    </div>
  );
}

export default CreateArea;
