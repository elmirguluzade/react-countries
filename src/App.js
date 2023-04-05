import GlobalStyle from "./globalStyles";
import Headers from './components/Header/Header'
import CountryContainer from "./components/CountryContainer/CountryContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Headers /> 
      <CountryContainer/> 
    </>
  );
}

export default App;
