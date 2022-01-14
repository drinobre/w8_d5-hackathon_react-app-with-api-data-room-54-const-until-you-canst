import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Cocktail from "../Cocktail";
import { useState, useEffect } from "react";

function Cocktails({ cockSearch }) {
  const [cocktail, setCocktail] = useState("");
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

  useEffect(() => {
    fetchCock();
    console.log("Data is here", cocktail);
  }, []);

  function handleClick() {
    console.log("HANDLE CLICK FUNCTION");
  }
  console.log(cocktail);

  // <h1>Cocktail Name: {cocktail.drinks[0].strDrink}</h1>;
  return cocktail ? (
    <div>
      <h1>Cocktail Friend</h1>
      <Button onClick={handleClick}>Search Cocktails</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Cocktail cocktail={cocktail} />
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
