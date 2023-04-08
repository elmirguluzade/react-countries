import styled from "styled-components";

const CountryContainer = styled.div`
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 30px;
  min-height: calc(100vh - 120px);

  .card {
    background-color: ${(props) => (props.darkMode ? "#2B3743" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
    width: 250px;
    border-radius: 10px;

    .flag {
      width: 250px;
      height: 150px;
      cursor: pointer;
    }

    img {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 100%;
    }

    .content {
      padding: 15px;

      h4 {
        margin-bottom: 10px;
        cursor: pointer;
      }

      p {
        font-size: 14px;
        margin: 2px 0;
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }

    .flag {
      width: auto !important;
      height: auto !important;
      cursor: pointer;
    }

      h4 {
        margin: 20px 0;
        font-size: 30px;
        cursor: pointer;
      }

      p {
        font-size: 18px !important;
        margin: 2px 0;
      }
    }
`;

export default CountryContainer;
