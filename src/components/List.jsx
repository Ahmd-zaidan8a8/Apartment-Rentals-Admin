import ListItem from "./ListItem";
import '../App.css'

const List = ({ apartementList, onDelete , handleAddtoFavorites }) => {
  let list = apartementList.map((apartement) => {
    return (
      <ListItem key={apartement.id} item={apartement} onDelete={onDelete} handleAddtoFavorites={handleAddtoFavorites} />
    );
  });

  return (
    <div className="list-group text-left p-2 m-1">
      <h1 className="m-2 mt-4">Your Apartments' list</h1>
      <p className="text-left m-2 ">Manage your venues in one place </p>
      {list.length === 0 && <p>No items found.</p>}
      {list}
    </div>
  );
};

export default List;
