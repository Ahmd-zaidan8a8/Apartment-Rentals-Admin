const HomePage = ({ children }) => {
  return (
    <div className="HomePage">
      <h1>This is our HomePage</h1>
      <p>our list items and list will be here</p>
      <div>{children}</div>
    </div>
  );
};

export default HomePage;
