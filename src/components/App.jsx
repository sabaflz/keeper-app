import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />
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