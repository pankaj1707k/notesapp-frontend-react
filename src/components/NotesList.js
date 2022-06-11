import React from "react";
import NotesListItem from "./NotesListItem";

const NotesList = (props) => {
  const listItems = props.notes.map((note) => (
    <NotesListItem
      key={note.id.toString()}
      note={note}
      handleDelete={props.handleDelete}
      handleUpdate={props.handleUpdate}
      categories={props.categories}
    />
  ));

  return <ul className="list-no-bullets mt-3 p-0">{listItems}</ul>;
};

export default NotesList;
