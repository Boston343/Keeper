import React from "react";

const date = new Date();

function List() {
  return (
    <footer>
      <p>Copyright © {date.getFullYear()}</p>
    </footer>
  );
}

export default List;
