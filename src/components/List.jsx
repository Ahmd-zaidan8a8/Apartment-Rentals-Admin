import ListItem from "./ListItem";

const List = ({ apartementList, onDelete }) => {
  let list = apartementList.map((apartement) => {
    return (
      <ListItem key={apartement.id} item={apartement} onDelete={onDelete} />
    );
  });

  return (
    <div className="list-group text-center">
      <h1>Appartements List</h1>
      {list.length === 0 && <p>No items found.</p>}
      {list}
    </div>
  );
};

export default List;
