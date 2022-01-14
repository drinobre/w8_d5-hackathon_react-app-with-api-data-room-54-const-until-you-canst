import React from "react";
import Cocktail from "../Cocktail";

function Cocktails({ apiCock }) {
  return (
    <div>
      <h1>Cocktail Name: {apiCock.drinks[0].strDrink}</h1>
      <Cocktail></Cocktail>
    </div>
  );
}

export default Cocktails;
