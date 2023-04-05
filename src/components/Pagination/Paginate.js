import React, { useContext } from "react";
import { countriesContext } from "../../CountryContext";
import PaginationContainer from "./style";
import Pagination from "@mui/material/Pagination";

const Paginate = () => {
  const { states, setState } = useContext(countriesContext);

  const handleClick = (e, val) => {
    setState({ ...states, currentPage: val });
    window.scrollTo(0, 0);
  };

  return (
        states.countries.length >= 12 && <PaginationContainer>
        <Pagination
          count={Math.ceil(states.countries.length / 12)}
          color="primary"
          page={states.currentPage}
          onChange={handleClick}
          showFirstButton 
          showLastButton
        />
      </PaginationContainer> 
  );
};

export default Paginate;
