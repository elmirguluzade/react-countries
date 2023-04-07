import RegionFilter from '../FilterItems/RegionFilter'
import SearchBox from '../FilterItems/SearchBox';
import FilterContainer from './style';


const Filter = ({darkMode}) => {
  return (
    <FilterContainer darkMode={darkMode}>
      <SearchBox/>
      <RegionFilter/>
    </FilterContainer>
  );
};

export default Filter;
