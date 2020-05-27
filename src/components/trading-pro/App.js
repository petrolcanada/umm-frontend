import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="app-page-container">
      <div className="navbar-pro-container">
        <div className="logo">logo</div>
        <div className="navbar-opt-extrade">ExTrade</div>
        <div className="navbar-opt-protrade">ProTrade</div>
        <div className="navbar-opt-otc">OTC</div>
        <div className="navbar-opt-balance">Balance</div>
        <div className="navbar-opt-signout">SignOut</div>
      </div>
      <div className="trading-container">
        <div className="sidebar-pro-container">sidebar</div>
        <div className="market-data-container">
          <div className="upper-chart">upper</div>
          <div className="lower-chart">lower</div>
        </div>
      </div>
    </div>
  );
}

export default App;
