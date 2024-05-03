import ListItem from "./ListItem";

const List = ({ apartementList, onDelete }) => {
  const list = apartementList.map((apartement) => {
    return (
      <ListItem key={apartement.id} item={apartement} onDelete={onDelete} />
    );
  });

  return (
    <div className="list-group text-center">
      <h1>Appartements List</h1>
      {list}
    </div>
  );
};

export default List;
