import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  position: fixed;
  top: 60px;
  width: 100%;
  background-color: rgb(243, 243, 243);
  z-index: 999;

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
    top: 0;
    font-size: 20px;
  }

  select{
    padding: 10px;
  }
`;

export default FilterContainer;
