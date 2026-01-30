import { Link } from "react-router-dom";

const Lists = ({ list }) => (
  <Link to={`/${list._id}`}>
    <div className="box">
      <p>{list.name}</p>
    </div>
  </Link>
);

export default Lists;
