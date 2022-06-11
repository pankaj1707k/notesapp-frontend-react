import React from "react";
import UpdateDeleteNoteModal from "./UpdateDeleteNoteModal";

const NotesListItem = (props) => {
  return (
    <>
      <li
        className="card mb-2 cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target={"#note" + props.note.id}
      >
        <p className="m-0 card-body">{props.note.content}</p>
      </li>
      <UpdateDeleteNoteModal note={props.note} categories={props.categories} />
    </>
  );
};

export default NotesListItem;
