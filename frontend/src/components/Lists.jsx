import { Link } from "react-router-dom";

const Lists = ({ list }) => (
  <Link key={list._id} to={`/${list._id}`}>
    <div className="box" onClick={() => alert(`Klikattu ${list._id}`)}>
      <p>{list.name}</p>
    </div>
  </Link>
);

export default Lists;
