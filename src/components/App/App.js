import "./App.css";
import Cocktails from "../Cocktails";
import { useState } from "react";

function App() {
  const [inputUser, setInputUser] = useState("");
  const [cockSearch, setCockSearch] = useState("");

  function handleChange(event) {
    setInputUser(event.target.value);
    console.log(inputUser);
  }

  function handleClick() {
    setCockSearch(inputUser);
    console.log(cockSearch);
  }

  return (
    <div className="App">
      <div className="wave">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
        <Cocktails input={cockSearch} />
      </div>
    </div>
  );
}

export default App;
