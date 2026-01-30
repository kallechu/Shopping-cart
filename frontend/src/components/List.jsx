import { useParams } from "react-router-dom";
import { useState } from "react";

const List = ({ lists, updateList }) => {
  const [product, setProduct] = useState("")
  const [count, setCount] = useState("")

  let params = useParams();
  let id = params.id;
  const list = lists.find((list) => list._id === id);

  if (!lists.length) {
    return <p>Loading...</p>;
  }

  if (!list) {
    return <p>Cant find list</p>;
  }

  const addProdut = (event) => {
    event.preventDefault()

    updateList(id, {
      product: product,
      count: count
    })

    setProduct('')
    setCount('')
  }

  return (
    <div className="container">
      <div className="add-item">
        <form className="add-item-form" onSubmit={addProdut}>
          <input placeholder="Product..." value={product} onChange={(e) => setProduct(e.target.value)}></input>
          <input placeholder="Count..." value={count} onChange={(e) => setCount(e.target.value)}></input>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="main-box">
        <h1>{list.name}</h1>
        {list.items.map((item) => (
          <div className="box" key={item._id}>
            <p>
              {item.product} {item.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
