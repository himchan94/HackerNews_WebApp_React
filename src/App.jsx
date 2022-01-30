import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dummy } from "./components";
import { MainPage } from "./pages";
import { TopPostContainer } from "./container";
const App = () => {
  return (
    <>
      <Dummy />
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<TopPostContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
