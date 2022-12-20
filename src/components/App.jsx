import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  const [notes, setNotes] = React.useState([]);

  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={0} title="Note title" content="Note content" />
      {/* {notes.map(createNote)} */}

      <Footer />
    </div>
  );
}

export default App;
