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

  const handleListDelete = async (id) => {
    await listService.deleteList(id);

    setLists(lists.filter((list) => list._id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Home lists={lists}/>} />
      <Route path="/:id" element={<List />} />
    </Routes>
  );
}

export default App;
