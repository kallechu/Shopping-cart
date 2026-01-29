import { useParams } from "react-router-dom";

const List = () => {
  let params = useParams();
  let id = params.id
  return (<h1>Hello, {id}</h1>)
};

export default List;
