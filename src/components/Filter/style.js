import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  padding-top: 20px;
  position: relative;

  input {
    width: 350px;
    height: 35px;
    padding: 5px;
    padding-left: 60px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
    top: 8px;
    font-size: 20px;
  }

  select{
    padding: 10px;
  }
`;

export default FilterContainer;
