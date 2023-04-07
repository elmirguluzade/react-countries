import styled from "styled-components";

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid ${props => !props.darkMode ? "#ccc" : "#2B4045" };
  padding: 0 5%;
  box-shadow: 1px 1px 10px ${props => !props.darkMode ? "#ccc" : "#2B3743" };
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.darkMode ? "#2B3743" : "white" };
  z-index: 999;

  h3 {
    cursor: pointer;
    color: ${props => props.darkMode ? "white" : "black" }
  }

  button {
    border: none;
    background-color: ${props => props.darkMode ? "#2B3743" : "white" };
    color: ${props => props.darkMode ? "white" : "black" };
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`;

export default Heading;
