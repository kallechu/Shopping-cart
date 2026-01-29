import Lists from "./Lists";

const Home = ({ lists }) => (
  <div className="container">
    <div className="main-box">
      <h1>Shopping List</h1>
      <div className="lists">
        {lists.map((list) => (
          <Lists key={list._id} className="box" list={list} />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
