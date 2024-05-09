const Favorites = ({ favorites }) => {
  console.log(favorites)
  return (
    
    <div className="favorites container vh-100">
      <h1>Favorites:</h1>
      {favorites.map((fav) => (
        <li key={fav.id}>{fav.name}</li>
        
      ))}
      
    </div>
  );
};

export default Favorites;
