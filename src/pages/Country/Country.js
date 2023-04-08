import { useEffect, useState, useContext } from "react";
import CountryContainer from "./style";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Details from "../../components/Details/Details";
import Loading from "../../components/Loading/Loading";
import {countriesContext} from '../../CountryContext'
import axios from "axios";

const Country = () => {
  const params = useParams();
  const [country, setCountry] = useState([]);
  const {states: {darkMode}} = useContext(countriesContext)
  const [borderCountry, setBorderCountry] = useState([])
 
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((response) => {
        setCountry(response.data[0]);
        return response.data[0]
      })
      .then((data) => {
        let arr = []
        data.borders.forEach((border) => {
          axios.get(`https://restcountries.com/v3.1/alpha/${border}`)
          .then(res => arr.push(res.data[0]))
          .then(() => {
            if(data.borders.length === arr.length){
              setBorderCountry(arr)
            }
          })
        })
      })
  }, [params.name]);


  return (
    <>
      {Object.keys(country).length !== 0 &&
      params.name === country.name.common ? (
        <CountryContainer darkMode={darkMode}> 
          <BackButton />
          <div className="flex">
            <div className="flag">
              <img src={country.flags.svg} alt="flag" />
            </div>
            <div className="country-content">
              <h2>{country.name.common}</h2>
              <div className="content-details">
                <Details country={country} borderCountry={borderCountry}/>
              </div>
            </div>
          </div>
        </CountryContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Country;
