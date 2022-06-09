import React from "react";
import { Link } from "react-router-dom";
import UpdateDeleteNoteModal from "./UpdateDeleteNoteModal";

const NotesListItem = (props) => {
  return (
    <>
      <li className="card mb-2">
        <p className="m-0 card-body">
          {props.note.content}
          <Link
            to="#"
            className="stretched-link"
            data-bs-toggle="modal"
            data-bs-target="#noteModal"
          ></Link>
        </p>
      </li>
      <UpdateDeleteNoteModal note={props.note} />
    </>
  );
};

export default NotesListItem;
