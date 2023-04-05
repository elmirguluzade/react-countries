import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0;

  .page {
    margin: 5px;
    padding: 10px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    border: 1px solid rgb(41, 41, 41);
    color: rgb(41, 41, 41);
    background-color: white;
  }

  .page:hover {
    background-color: rgb(41, 41, 41);
    color: white;
  }

  .active {
    background-color: rgb(41, 41, 41);
    color: white;
  }
`;

export default PaginationContainer;
