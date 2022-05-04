import React from "react";
import { useState } from "react";
import "./customeForm.css";

export const CustomeForm = ({ getRecipe }) => {
  const [query, setQuery] = useState("");

  const handelOnClick = (e) => {
    e.preventDefault();
    getRecipe(query);
    
  };
  return (
    <div>
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Enter ingridient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search__btn" onClick={handelOnClick}>
          Search
        </button>
        {/* <select name="" id=""></select> */}
      </form>
    </div>
  );
};
