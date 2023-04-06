import styled from "styled-components";

const CountryContainer = styled.div`
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 30px;

  .card {
    background-color: white;
    width: 250px;
    border-radius: 10px;

    .flag{
        width: 250px;
        height: 150px;
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
      }

      p {
        font-size: 14px;
        margin: 2px 0;
      }
    }
  }
`;

export default CountryContainer;
