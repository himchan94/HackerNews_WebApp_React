import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dummy } from "./components";
import { MainPage } from "./pages";
import {
  TopPostContainer,
  NewPostContainer,
  AskPostContainer,
  ShowPostContainer,
} from "./container";
const App = () => {
  return (
    <>
      <Dummy />
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<TopPostContainer />} />
          <Route path='new' element={<NewPostContainer />} />
          <Route path='ask' element={<AskPostContainer />} />
          <Route path='show' element={<ShowPostContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
