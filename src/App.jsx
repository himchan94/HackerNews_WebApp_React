import React from "react";
import { DailyNewsCard, Dummy, InputArea } from "./components";
import { Routes, Route, NavLink } from "react-router-dom";
import { DailyNewsContainer, PostContainer } from "./container";
const App = () => {
  return (
    <>
      <Dummy />
      <InputArea />
      <DailyNewsContainer />
      <PostContainer />
      <Routes></Routes>
    </>
  );
};

export default App;
