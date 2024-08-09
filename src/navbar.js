import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-account">Create Account</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/deposit">Deposit/Withdraw</Link></li>
        <li><Link to="/balance">Balance</Link></li>
        <li><Link to="/all-data">All Data</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
