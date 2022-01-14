import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Cocktail from "../Cocktail";
import "./Cocktails.css";
import { useState, useEffect } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/random.php

function Cocktails({ input }) {
  const [cockSearch, setCockSearch] = useState("");

  useEffect(() => {
    fetchCock();
  }, [input]);

  async function fetchCock() {
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
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
        <Cocktail cocktail={cockSearch} />
      </div>
    </div>
  ) : (
    <>Nothing here yet</>
  );
}

export default Cocktails;
