import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  padding: 20px 5%;
  padding-bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;

  input {
    width: 350px;
    height: 35px;
    padding: 5px;
    padding-left: 60px;
    border: 1px solid ${(props) => (props.darkMode ? "#2B3743" : "white")};
    border-radius: 4px;
    background-color: ${(props) => (props.darkMode ? "#2B3743" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }

  label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
    top: 10px;
    font-size: 20px;
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }

  select {
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.darkMode ? "#2B3743" : "white")};
    border: 1px solid ${(props) => (props.darkMode ? "#2B3743" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      width: 100%;
      margin-bottom: 10px;
    }

    label {
      top: -15px;
      left: 30px;
    }

    select {
      width: 100%;
    }
  }
`;

export default FilterContainer;
