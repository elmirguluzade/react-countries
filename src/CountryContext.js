import { createContext, useState } from "react";

export const countriesContext = createContext();

const CountryProvider = ({children}) => {
    const [states, setState] = useState({
        countries: [],
        tempArr: [],
        loading: false,
        searchText: "",
        filterBy: "",
        currentPage: 1,
        darkMode: false
    })

  return (
    <countriesContext.Provider value={{states, setState}}>
        {children}
    </countriesContext.Provider>
  );
};

export default CountryProvider;
