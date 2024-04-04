import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Wrap maxw={1300}>
      <Routes>
        <Route path="*" element={<MainPage />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
