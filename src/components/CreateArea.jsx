import React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = React.useState(false);

  function expand() {
    setIsExpanded(true);
  }

  // ------------------------------------------------------------------------------
  // only update the value that needs updated, otherwise keep using existing value
  function handleChange(event) {
    const { value, name } = event.target;

    setNewNote((prevValue) => {
      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevValue.content,
      //   };
      // } else if (name === "content") {
      //   return {
      //     title: prevValue.title,
      //     content: value,
      //   };
      // }

      // This is a shorter version of the above
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // ------------------------------------------------------------------------------
  // handling the "Add" button press to add a new note
  function handleAdd(event) {
    // add function is within "App.jsx"
    props.onAdd(newNote);

    // reset text data to nothing
    setNewNote({ title: "", content: "" });

    // make the new note section small again
    setIsExpanded(false);

    // prevent page refreshing
    event.preventDefault();
  }

  // ------------------------------------------------------------------------------
  return (
    <div>
      <form onSubmit={handleAdd} className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
