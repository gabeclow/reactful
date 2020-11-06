import React from "react";
import ReactDOM from "react-dom";
import HEADER from "./components/bootstrap_header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import HOMEPAGE from './components/home_page';
import TestPage from "./pages.js/testPage";
function buildApp() {
  return (
    <div>
      <HEADER />
      <TestPage />
    </div>
  );
}

ReactDOM.render(buildApp(), document.getElementById("root"));
