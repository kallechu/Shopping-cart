import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import listService from "./services/lists";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    listService.getAll().then((lists) => setLists(lists));
  }, []);

  /* const handleListDelete = async (id) => {
    await listService.deleteList(id);

    setLists(lists.filter((list) => list._id !== id));
  }; */

  const handleNewList = async (listObject) => {
      try {
        const list = await listService.createList(listObject);
        
        setLists(lists.concat(list));
  
      } catch (error) {
        console.error(error);
      }
    };

const handleListUpdate = async (id, listObject) => {
  try {
    const list = await listService.updateList(id, listObject)

    setLists((prev) => prev.map((l) => l._id === list._id ? list : l))
  } catch (error) {
    console.error(error)
  }
}

  return (
    <Routes>
      <Route path="/" element={<Home lists={lists} createList={handleNewList}/>} />
      <Route path="/:id" element={<List lists={lists} updateList={handleListUpdate}/>} />
    </Routes>
  );
}

export default App;
