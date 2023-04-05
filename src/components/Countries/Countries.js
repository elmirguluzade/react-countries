/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CountryContainer from "./style";
import { countriesContext } from "../../CountryContext";

const Countries = () => {
  const { states } = useContext(countriesContext);
  const [paginatedCountries, setPaginatedCountries] = useState([]);

  const numFixer = (num) => {
    num = num.toString().split("").reverse().join("");
    for (let i = 0; i < num.length; i++) {
      if (i % 4 === 3) num = num.slice(0, i) + "." + num.slice(i);
    }
    return num.split("").reverse().join("");
  };

  useEffect(() => {
    const postPerPage = 12;
    const lastProductIndex = states.currentPage * postPerPage;
    const firstProductIndex = lastProductIndex - postPerPage;
    const allCountries = states.countries.slice(
      firstProductIndex,
      lastProductIndex
    );
    setPaginatedCountries(allCountries);
  }, [states.countries, states.currentPage]);

  return (
    <CountryContainer>
      {paginatedCountries.map((c, i) => (
        <div className="card" key={i}>
          <div className="flag">
            <img src={c.flags.svg} alt="country" />
          </div>
          <div className="content">
            <h4>{c.name.common}</h4>
            <p>
              Population: <b>{numFixer(c.population)}</b>
            </p>
            <p>
              Region: <b>{c.region}</b>
            </p>
            <p>
              Capital: <b>{c.capital}</b>
            </p>
          </div>
        </div>
      ))}
    </CountryContainer>
  );
};

export default Countries;
