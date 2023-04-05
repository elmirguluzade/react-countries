/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Countries from "../Countries/Countries";
import Filter from "../Filter/Filter";
import { countriesContext } from "../../CountryContext";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Paginate";
import axios from "axios";

const CountryContainer = () => {
  const { states, setState } = useContext(countriesContext);

  // !Paginate
  useEffect(() => {
    setState({ ...states, loading: true });
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const resultCountries = response.data.sort(function (first, second) {
        let A = first.name.common.toLowerCase(),
          B = second.name.common.toLowerCase();
        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
      });
      setState({
        ...states,
        countries: resultCountries,
        tempArr: resultCountries,
        loading: false,
      });
    };

    getCountries();
  }, []);

  useEffect(() => {
    const filterData = () => {
      setState({ ...states, loading: true });
      const filteredArr = states.tempArr.filter((c) => {
        if (states.filterBy === "" && states.searchText === "") {
          return [states.countries];
        } else if (states.filterBy === "") {
          return c.name.common.toLowerCase().includes(states.searchText);
        } else if (states.searchText === "") {
          return c.region.includes(states.filterBy);
        } else {
          return (
            c.region.includes(states.filterBy) &&
            c.name.common.toLowerCase().includes(states.searchText)
          );
        }
      });
      setState({ ...states, countries: filteredArr, currentPage: 1 });
    };
    filterData();
  }, [states.searchText, states.filterBy]);

  return (
    <div style={{ backgroundColor: "#f3f3f3", minHeight: "80vh" }}>
      <Filter />
      {!states.loading ? <Countries /> : <Loading />}
      <Pagination />
    </div>
  );
};

export default CountryContainer;
