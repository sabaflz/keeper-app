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

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter(
                (item, index) => {
                    return index !== id;
                }
                );
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={createNote}/>
            {notes.map((note, index) => {
                return <Note 
                key={index} 
                id={index} 
                title={note.title} 
                content={note.content} 
                onDelete={deleteNote}
                />
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