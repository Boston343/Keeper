import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: "",
  });

  // ------------------------------------------------------------------------------
  // only update the value that needs updated, otherwise keep using existing value
  function handleChange(event) {
    const { value, name } = event.target;

    setNewNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  // ------------------------------------------------------------------------------
  // handling the "Add" button press to add a new note
  function handleAdd(event) {
    // add function is within "App.jsx"
    props.onAdd(newNote);

    // reset text data to nothing
    setNewNote({ title: "", content: "" });

    // prevent page refreshing
    event.preventDefault();
  }

  // ------------------------------------------------------------------------------
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
