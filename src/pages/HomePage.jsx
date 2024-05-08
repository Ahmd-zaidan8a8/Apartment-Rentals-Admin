import List from "../components/List";

const HomePage = ({ apartementList, handleDelete }) => {
  return (
    <div className="HomePage m-1">
      <h1 className="m-2 mt-4">Your apartments' list</h1>
      {apartementList.length > 0 && (
        <List apartementList={apartementList} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default HomePage;
