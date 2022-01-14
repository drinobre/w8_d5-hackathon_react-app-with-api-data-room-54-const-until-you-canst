import React from "react";
import IngredientsList from "../IngredientsList";

function Cocktail({ cocktail }) {
  const ct = cocktail.drinks[0];
  return (
    <div>
      <h1>{cocktail.drinks[0].strDrink}</h1>
      <img src={ct.strDrinkThumb} alt="Cocktail" />
      <IngredientsList ingredients={cocktail} />
    </div>
  );
}

export default Cocktail;
