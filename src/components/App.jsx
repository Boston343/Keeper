import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f7c742",
      main: "#f5ba13",
      dark: "#e5ac12",
    },
  },
});

function App() {
  const [notes, setNotes] = React.useState([]);

  // ------------------------------------------------------------------------------
  // add a note to our array and therefore our app
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // ------------------------------------------------------------------------------
  // Delete a note using its key value
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id; // return all notes
      });
    });
  }

  // ------------------------------------------------------------------------------
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />

        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
