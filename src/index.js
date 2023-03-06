import ReactDOM from "react-dom";
import React from "react";
import logo from "./react-logo.png";
import "./style.css"

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("app"));
