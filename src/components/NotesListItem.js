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
      <UpdateDeleteNoteModal
        note={props.note}
        handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate}
        notebooks={props.notebooks}
      />
    </>
  );
};

export default NotesListItem;
