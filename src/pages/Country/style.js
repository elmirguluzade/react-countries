import styled from "styled-components";

const CountryContainer = styled.div`
  padding: 0 5%;
  background-color: ${(props) => (props.darkMode ? "#2B3743" : "white")};
  padding-top: 100px;
  height: 100vh;

  button {
    margin: 30px 0;
    margin-top: 10px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 6px 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px "#ccc";
    font-weight: 600;
    background-color: ${(props) => (props.darkMode ? "#2B3743" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "#3d3d3d")};

    svg {
      margin-right: 8px;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .flag {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .country-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    color: ${(props) => (props.darkMode ? "white" : "#3d3d3d")};

    h2 {
      margin-bottom: 20px;
      color: ${(props) => (props.darkMode ? "white" : "#0c0c0e")};
    }

    b {
      color: ${(props) => (props.darkMode ? "white" : "#191919")};
    }
  }

  .content-details {
    ul {
      list-style-type: none;

      li {
        margin: 10px 0;
      }
    }

    .borders {
      margin-top: 20px;

      .borderHeader {
        font-weight: 700;
        display: inline;
      }

      a {
        text-decoration: none;
        color: ${(props) => (props.darkMode ? "white" : "black")};

        span {
          display: inline-block;
          margin: 0 2px;
          padding: 3px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
    }

    .flag, .country-content {
      width: 100%;
      margin: 20px 0;
    }
  }
`;

export default CountryContainer;
