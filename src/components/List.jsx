const List = ({ apartements, onDelete }) => {
  const apartementList = apartements.map((apartement) => {
    return (
      <div key={apartement.id}>
        <p>{apartement.name}</p>
        <p>Price: {apartement.price}</p>
        {apartement.cancellation_policy === "flexible" && <p>flexible</p>}
        <button
          onClick={() => {
            onDelete(apartement.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
    return <div>{apartementList}</div>
};

export default List;
