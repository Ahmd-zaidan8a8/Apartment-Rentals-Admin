const ListItem = (props) => {
  const { item , onDelete } = props;
  return (
    <div>
      <p>{item.name}</p>
      <p>Price: {item.price}</p>

      {item.cancellation_policy === "flexible" && <p>flexible</p>}

      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
