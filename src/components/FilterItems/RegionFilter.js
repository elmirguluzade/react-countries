import { useContext } from "react";
import { countriesContext } from "../../CountryContext";

const RegionFilter = () => {
  const { states, setState } = useContext(countriesContext);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <select onChange={(e) => setState({...states, filterBy: e.target.value})}>
        <option value={""}>Filter by Region</option>
        {regions.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
