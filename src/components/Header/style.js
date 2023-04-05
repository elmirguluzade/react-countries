import styled from "styled-components";

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 5%;
  box-shadow: 1px 1px 10px #ccc;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 999;

  button {
    background-color: white;
    border: none;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`;

export default Heading;
