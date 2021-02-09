import React from "react";
import { ROOT } from "./Routes";
import { Route } from "react-router-dom";

export const NotFoundRouter = () => {
  return (
    <>
      <Route to={ROOT}>Home</Route>
      <div>404: page not found!</div>
    </>
  );
};
