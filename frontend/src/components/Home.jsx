import Lists from "./Lists";
import CreateList from "./CreateList";

const Home = ({ lists, createList }) => (
  <div className="container">
    <CreateList createList={createList} />
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
