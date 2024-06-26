import List from "../components/List";

const HomePage = ({ apartementList, handleDelete , handleAddtoFavorites}) => {
  return (
    <div className="HomePage m-1 row">
      <div className="col-md-3"></div>
      
      {apartementList.length > 0 && (
        <List apartementList={apartementList} onDelete={handleDelete} handleAddtoFavorites={handleAddtoFavorites} />
      )}
    </div>
  );
};

export default HomePage;
