import "./App.css";
import Cocktails from "../Cocktails";
import { useState, useRef, useEffect } from "react";

// const url = `www.thecocktaildb.com/api/json/v1/1/`;
// const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
// const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
function App() {
  const textInput = useRef("");
  const [cockSearch, setCockSearch] = useState();

  // function handleChange(event) {
  //   textInput.current = event.target.value;
  // }

  // function handleClick() {
  //   setCockSearch(textInput.current);
  //   console.log(cockSearch);
  // }

  return (
    <div className="App">
      {/* <input type="text" onChange={handleChange}></input> */}
      {/* <button onClick={handleClick}>Search</button> */}
      <Cocktails cockSearch={cockSearch} />
    </div>
  );
}

export default App;
