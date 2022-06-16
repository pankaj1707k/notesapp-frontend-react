const NotebookListItem = (props) => {
  return (
    <li className="fs-5 d-flex justify-content-between mb-1">
      <p className="mb-0">{props.notebook.name}</p>
      <i
        className="bi bi-trash3-fill cursor-pointer text-danger"
        onClick={() => props.handleDelete(props.notebook.id)}
      ></i>
    </li>
  );
};

export default NotebookListItem;
