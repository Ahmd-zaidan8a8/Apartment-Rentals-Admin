import ListItem from "./ListItem";

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
<<<<<<< HEAD
=======
  

>>>>>>> 55e0c3db9f62a25f2d9e8ea0fcb695cdc30722c5
};

export default List;
