import React from "react";
import IngredientsList from "../IngredientsList";
import "./Cocktail.css";

function Cocktail({ cocktail }) {
  const ct = cocktail.drinks[0];
  return (
    <div>
      <h1>{cocktail.drinks[0].strDrink}</h1>
      <div id="flex-div">
        <img src={ct.strDrinkThumb} alt="Cocktail" />
        <IngredientsList ingredients={cocktail} />
      </div>
    </div>
  );
}

export default Cocktail;
