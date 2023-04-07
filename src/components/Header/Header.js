import Heading from "./style";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { countriesContext } from "../../CountryContext";

const Header = () => {
  const navigate = useNavigate();
  const { states, setState } = useContext(countriesContext);
  return (
    <Heading darkMode={states.darkMode}>
      <h3 onClick={() => navigate("/")}>Where in the world?</h3>
      <button onClick={() => setState({...states, darkMode: !states.darkMode})}>
        {!states.darkMode ? <BsMoon /> : <BsMoonFill />}  Dark Mode
      </button>
    </Heading>
  );
};

export default Header;
