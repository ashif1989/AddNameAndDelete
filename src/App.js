import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  let handleChange = (e) => {
    setName(e.target.value);
  };

  let handleAdd = () => {
    setNameList([...nameList, name]);
    setName("");
  };

  let handleDelete = (index) => {
    let listName = [...nameList];
    listName.splice(index, 1);
    setNameList(listName);
  };

  return (
    <div className="App">
      <h1>Add Names</h1>
      <label>Name: </label>
      <input value={name} type="text" onChange={(e) => handleChange(e)}></input>
      <button onClick={handleAdd}>Add</button>
      <br />
      <ul>
        {nameList.map((name, index) => (
          <>
            <li>
              {name}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
