import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){

    const [notes, setNotes] = useState([]);

    function createNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
        console.log(notes);
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={createNote}/>
            {notes.map(note => {
                return <Note title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    );
}

export default App;

// import notes from "../notes";
// {notes.map(note => (
//     <Note 
//     key = {note.key}
//     id = {note.key}
//     title = {note.title}
//     content = {note.content}
//     />
// ))}