import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { MainRouter } from "./navigation/MainRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import { USERS, ROOT } from "./navigation/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to={ROOT} className="nav-link">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to={USERS} className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
