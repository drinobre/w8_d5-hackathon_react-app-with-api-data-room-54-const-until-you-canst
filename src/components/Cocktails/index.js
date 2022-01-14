import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Cocktail from "../Cocktail";
import "./Cocktails.css";
import { useState, useEffect } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/random.php

function Cocktails({ input, cocktail }) {
  // const [cocktail, setCocktail] = useState("");
  // const [btnClick, setBtnClick] = useState(false);

  const [cockSearch, setCockSearch] = useState("");

  // users add input
  // users click on the button
  // input is storage and use on the url for search
  // fetch API based on the input

  useEffect(() => {
    fetchCock();
    // setBtnClick(false);
  }, [input]);

  async function fetchCock() {
    try {
      const response = await fetch(
        // `www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
        // `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
        // `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      setCockSearch(data);
      console.log(data);
    } catch (err) {
      console.log("ERROR HERE");
    }
  }

  // function handleChange(event) {
  //   setCockSearch(event.target.value);
  // }
  // console.log(cockSearch);

  // function handleClick() {
  //   setBtnClick(true);
  // }
  // console.log(cocktail);

  return cockSearch ? (
    <div>
      <div className="cocktail-div">
        <nav>
          <h1 id="title">Cocktail Friend</h1>
        </nav>
        <div id="search-box">
          {/* <TextField
            id="outlined-basic"
            label="Search for a cocktail..."
            variant="outlined"
            onChange={handleChange}
          /> */}

          <div id="input-field-div">
            {/* <Button id="search-btn" variant="contained" onClick={handleClick}>
              Search Cocktails
            </Button> */}
          </div>
        </div>
        {/* <h1>{cockSearch.drinks[0].strDrink}</h1> */}
        <Cocktail cocktail={cockSearch} />
        {/* <p>Display {input}</p> */}
      </div>
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
