import { useEffect, useState } from "react";
import listService from "./services/lists";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    listService.getAll().then((lists) => setLists(lists));
  }, []);

  return (
    <div>
      {lists.map((list) => (
        <div key={list._id}>
          {list.items.map((item) => (
            <p key={item._id}>
              {item.product} {item.count}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
