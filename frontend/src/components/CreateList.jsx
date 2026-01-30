import { useState } from "react";

const CreateList = ( {createList} ) => {
  const [listName, setListName] = useState("");

  const addList = (event) => {
    event.preventDefault();
    createList({
      name: listName,
    });

    setListName("");
  };

  return (
    <form onSubmit={addList}>
      <div className="create-list">
        <input
          placeholder="List name..."
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        ></input>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreateList;
