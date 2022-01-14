import React from "react";
import IngredientsList from "../IngredientsList";

function Cocktail({ name, image }) {
  return (
    <div>
      <h1>Name of cocktail</h1>
      <img src="" alt="Cocktail" />
      <IngredientsList />
    </div>
  );
}

export default Cocktail;
