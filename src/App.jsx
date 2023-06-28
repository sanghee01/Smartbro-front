import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Main from "./pages/Main";
import Summary from "./pages/Summary";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
