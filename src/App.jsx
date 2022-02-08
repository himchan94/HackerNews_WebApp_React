import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dummy } from "./components";
import {
  MainPage,
  AboutPage,
  DetailPage,
  CommentPage,
  UserPage,
  SearchPage,
} from "./pages";
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
          <Route path='top' element={<TopPostContainer />} />
          <Route path='new' element={<NewPostContainer />} />
          <Route path='ask' element={<AskPostContainer />} />
          <Route path='show' element={<ShowPostContainer />} />
        </Route>
        <Route path='/detail/*' element={<DetailPage />} />
        <Route path='/comment/*' element={<CommentPage />} />
        <Route path='/user/*' element={<UserPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
