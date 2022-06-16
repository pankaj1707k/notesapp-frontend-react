import NotebookListItem from "./NotebookListItem";

const NotebookList = (props) => {
  var listItems = props.notebooks.map((notebook) => (
    <NotebookListItem
      key={notebook.name}
      notebook={notebook}
      handleDelete={props.handleDelete}
      getNotes={props.getNotes}
    />
  ));
  return <ul className="list-no-bullets px-1 mt-3">{listItems}</ul>;
};

export default NotebookList;
