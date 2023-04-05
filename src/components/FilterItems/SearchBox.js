/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { countriesContext } from "../../CountryContext";

const SearchBox = () => {
  const { states, setState } = useContext(countriesContext);

  return (
    <>
      <label htmlFor="search">
        <AiOutlineSearch />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for a country...."
        value={states.searchText}
        onChange={(e) => setState({...states, searchText: e.target.value})}
      />
    </>
  );
};

export default SearchBox;
