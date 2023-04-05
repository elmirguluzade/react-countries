import RegionFilter from '../FilterItems/RegionFilter'
import SearchBox from '../FilterItems/SearchBox';
import FilterContainer from './style';


const Filter = () => {
  return (
    <FilterContainer>
      <SearchBox/>
      <RegionFilter/>
    </FilterContainer>
  );
};

export default Filter;
