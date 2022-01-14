import React from "react";
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
  }, [handleClick]);

  function handleClick() {
    console.log("HANDLE CLICK FUNCTION");
  }

  return setCocktail ? (
    <div>
      <button onClick={handleClick}></button>
      <h1>Cocktail Name: {cocktail.drinks[0].strDrink}</h1>
      <Cocktail cocktail={cocktail} />
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
