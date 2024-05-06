import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";

const List = ({ apartementList, onDelete }) => {
  let list = apartementList.map((apartement) => {
    return (
      <ListItem key={apartement.id} item={apartement} onDelete={onDelete} />
    );
  });

  return (
    <div className="list-group text-left p-2 m-1">
      <p className="text-left">Manage your venues in one place</p>
      {list.length === 0 && <p>No items found.</p>}
      {list}
    </div>
  );
  <AddItemForm />

};



export default List;
