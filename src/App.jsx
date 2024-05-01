import data from "./data/data.json";

const App = () => {
  const { results } = data;
  const apartements = results.map((apartement) => {
    return (
      <>
        <p>{apartement.name}</p>
        <p>Price: {apartement.price}</p>
        {apartement.cancellation_policy === "flexible" && <p>flexible</p>}
      </>
    );
  });

  return (
    <>
      <h1>Appartements List.</h1>
      <ul>{apartements}</ul>
    </>
  );
};

export default App;
