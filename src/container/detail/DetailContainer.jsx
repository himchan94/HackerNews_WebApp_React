import React from "react";
import { Outlet } from "react-router-dom";

const DetailContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DetailContainer;
