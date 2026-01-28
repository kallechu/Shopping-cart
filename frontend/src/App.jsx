import { useEffect, useState } from "react";
import listService from "./services/lists";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    listService.getAll().then((lists) => setLists(lists));
  }, []);

  const handleListDelete = async (id) => {
    await listService.deleteList(id)

    setLists(lists.filter(list => list._id !== id))
  }

  return (
    <div id="container">
      <div id="main-box">
        <div id="lists">
          {lists.map((list) => (
            <div key={list._id} className="box">
              <p>{list.name}</p>
              {list.items.map((item) => (
                <p key={item._id}>
                  {item.product} {item.count}
                </p>
              ))}
              <button onClick={() => handleListDelete(list._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
