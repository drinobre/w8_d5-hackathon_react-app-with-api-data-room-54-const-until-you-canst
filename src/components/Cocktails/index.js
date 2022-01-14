import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Cocktail from "../Cocktail";
import "./Cocktails.css";
import { useState, useEffect } from "react";

function Cocktails() {
  const [cocktail, setCocktail] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  //const [cockSearch, setCockSearch] = useState();

  useEffect(() => {
    async function fetchCock() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );
        const data = await response.json();
        console.log(data);
        setCocktail(data);
      } catch (err) {
        console.log("ERROR HERE");
      }
    }
    fetchCock();
    setBtnClick(false);
  }, [btnClick]);

  function handleClick() {
    setBtnClick(true);
  }
  console.log(cocktail);

  function handleChange(event) {
    //cockSearch = event.target.value;
    //setCockSearch(cockSearch);
  }

  // <h1>Cocktail Name: {cocktail.drinks[0].strDrink}</h1>;
  return cocktail ? (
    <div>
      <div className="cocktail-div">
        <nav>
          <h1 id="title">Cocktail Friend</h1>
        </nav>
        <div id="search-box">
          <TextField
            id="outlined-basic"
            label="Search for a cocktail..."
            variant="outlined"
            onChange={handleChange}
          />

          <div id="input-field-div">
            <Button id="search-btn" variant="contained" onClick={handleClick}>
              Search Cocktails
            </Button>
          </div>
        </div>
        <Cocktail cocktail={cocktail} />
      </div>
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
