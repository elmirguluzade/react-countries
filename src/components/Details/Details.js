import Loading from "../Loading/Loading";
import { numFixer } from "../../helper";
import { Link } from "react-router-dom";

const Details = ({ country, borderCountry }) => {
  return (
    <>
      {Object.keys(country).length !== 0 ? (
        <>
          <div className="d-flex" style={{ gap: "15px" }}>
            <div className="details-left">
              <ul>
                <li>
                  <b>Native Name: </b>
                  {Object.values(country.name.nativeName)[0].common}
                </li>
                <li>
                  <b>Population: </b>
                  {numFixer(country.population)}
                </li>
                <li>
                  <b>Region: </b>
                  {country.region}
                </li>
                <li>
                  <b>Sub Region: </b>
                  {country.subregion}
                </li>
                <li>
                  <b>Capital: </b>
                  {country.capital}
                </li>
              </ul>
            </div>
            <div className="details-right">
              <ul>
                <li>
                  <b>Top Level Domain: </b>
                  {country.tld}
                </li>
                <li>
                  <b>Currencies: </b>
                  {Object.values(country.currencies)[0].name}
                </li>
                <li>
                  <b>Languages: </b>
                  {Object.values(country.languages).map((l) => l + ", ")}
                </li>
              </ul>
            </div>
          </div>
          <div className="borders">
            <span className="borderHeader">Border Countries: </span>
             {borderCountry.length > 1 ? borderCountry.map((border, i) =>
                (
                  <Link to={`/country/${border.name.common}`} key={i}>
                    <span>{border.name.common}</span>
                  </Link>
                )
              ) : <span>None</span>}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
