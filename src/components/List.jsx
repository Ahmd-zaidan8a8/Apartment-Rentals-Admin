import ListItem from "./ListItem";

const List = ({ apartementList, onDelete }) => {
  const list = apartementList.map((apartement) => {
    return (
      <ListItem key={apartement.id} item={apartement} onDelete={onDelete} />
    );
  });
  return (
    <div>
      <h1>Appartements List.</h1>
      {list}
    </div>
  );
};

export default List;
