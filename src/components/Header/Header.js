import Heading from "./style";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { countriesContext } from "../../CountryContext";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('darkMode')){
      localStorage.setItem('darkMode', "false")
    }
  }, [])


  const darkModeHandler = () => {
    localStorage.setItem('darkMode', `${!states.darkMode}`)
    setState({ ...states, darkMode: !states.darkMode })
  }

  const { states, setState } = useContext(countriesContext);
  return (
    <Heading darkMode={states.darkMode}>
      <h3 onClick={() => navigate("/")}>Where in the world?</h3>
      <button onClick={darkModeHandler}>
        {!states.darkMode ? <BsMoon /> : <BsMoonFill />}  Dark Mode
      </button>
    </Heading>
  );
};

export default Header;
