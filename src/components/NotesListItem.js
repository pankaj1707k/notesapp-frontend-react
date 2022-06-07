import React from "react";
import { Link } from "react-router-dom";

const NotesListItem = () => {
  return (
    <li className="card mb-2">
      <p className="m-0 card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit
        hendrerit, hendrerit tellus vitae, ullamcorper libero.
        <Link to="#" className="stretched-link"></Link>
      </p>
    </li>
  );
};

export default NotesListItem;
