import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0;

  button {
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }
`;

export default PaginationContainer;
