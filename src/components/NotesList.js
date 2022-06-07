import React from "react";
import NotesListItem from "./NotesListItem";

const NotesList = () => {
  return (
    <ul className="list-no-bullets mt-3 p-0">
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
    </ul>
  );
};

export default NotesList;
