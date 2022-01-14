import "./App.css";
import Cocktails from "../Cocktails";
import { useState, useRef } from "react";

function App() {
  //const textInput = useRef("");
  const [inputUser, setInputUser] = useState("Mulled Wine");
  const [cockSearch, setCockSearch] = useState("Mulled Wine");

  function handleChange(event) {
    //textInput = event.target.value;
    // console.log(textInput);
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
        {/* <Cocktails /> */}
      </div>
    </div>
  );
}

export default App;
