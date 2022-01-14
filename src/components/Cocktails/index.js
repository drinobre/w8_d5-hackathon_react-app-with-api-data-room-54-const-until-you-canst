import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Cocktail from "../Cocktail";
import "./Cocktails.css";
import { useState, useEffect } from "react";

function Cocktails() {
  const [cocktail, setCocktail] = useState("");
  const [btnClick, setBtnClick] = useState(false);

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
  }, [btnClick]);

  function handleClick() {
    setBtnClick(true);
  }
  console.log(cocktail);

  // <h1>Cocktail Name: {cocktail.drinks[0].strDrink}</h1>;
  return cocktail ? (
    <div>
      <nav>
        <h1>Cocktail Friend</h1>
      </nav>
      <Button variant="contained" onClick={handleClick}>
        Search Cocktails
      </Button>
      <TextField
        id="outlined-basic"
        label="Search for a cocktail..."
        variant="outlined"
      />
      <Cocktail cocktail={cocktail} />
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
