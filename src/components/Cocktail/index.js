import React from "react";
import "./Cocktail.css";

function Cocktail({ cocktail }) {
  return (
    <div>
      <h1>{cocktail.drinks[0].strDrink}</h1>
      <div id="flex-div">
        <img src={cocktail.drinks[0].strDrinkThumb} alt="Cocktail" />
        <p>{cocktail.drinks[0].strInstructions}</p>
      </div>
    </div>
  );
}

export default Cocktail;
