const Favorites = ({ favorites }) => {
  console.log(favorites)
  return (
    <div className="container vh-100">
      {favorites.map((fav) => (
        <li key={fav.id}>{fav.name}</li>
      ))}
    </div>
  );
};

export default Favorites;
