import CountryContainer from "./components/CountryContainer/CountryContainer";
import Layout from "./components/Layout/Layout";
import GlobalStyle from "./globalStyles";
import NotFound from "./components/NotFound/NotFound";
import Country from './pages/Country/Country'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CountryContainer />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
