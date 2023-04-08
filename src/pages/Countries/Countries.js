/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CountryContainer from "./style";
import { countriesContext } from "../../CountryContext";
import { useNavigate } from "react-router-dom";
import {numFixer} from '../../helper'

const Countries = () => {
  const { states } = useContext(countriesContext);
  const [paginatedCountries, setPaginatedCountries] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const postPerPage = 12;
    const lastProductIndex = states.currentPage * postPerPage;
    const firstProductIndex = lastProductIndex - postPerPage;
    const allCountries = states.countries.slice(firstProductIndex,lastProductIndex);
    setPaginatedCountries(allCountries);
  }, [states.countries, states.currentPage]);

  return (
    <CountryContainer darkMode={states.darkMode}>
      {paginatedCountries.map((c, i) => (
        <div className="card" key={i}>
            <div className="flag" onClick={() => navigate(`country/${c.name.common}`)}>
              <img src={c.flags.svg} alt="country" />
            </div>
            <div className="content">
              <h4 onClick={() => navigate(`country/${c.name.common}`)}>{c.name.common}</h4>
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
