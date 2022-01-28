import React from "react";
import { DailyNewsCard, Dummy, InputArea } from "./components";
import { Routes, Route, NavLink } from "react-router-dom";
import { DailyNewsContainer } from "./container";
const App = () => {
  return (
    <>
      <Dummy />
      <InputArea />
      <DailyNewsContainer />
      <Routes></Routes>
    </>
  );
};

export default App;
