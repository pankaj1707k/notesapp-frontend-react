import React from "react";
import { Link } from "react-router-dom";

const NotesListItem = (props) => {
  return (
    <li className="card mb-2">
      <p className="m-0 card-body">
        {props.value}
        <Link
          to="#"
          className="stretched-link"
          data-bs-toggle="modal"
          data-bs-target="#noteModal"
        ></Link>
      </p>
    </li>
  );
};

export default NotesListItem;
