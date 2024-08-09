import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import { CreateAccount } from './components/createaccount';
import Login from './login';
import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import { AllData } from './alldata';
import { Home } from './home';
import Context from './context';
import { Balance } from './balance';

function App() {
  const userContextValue = {
    users: [{ name: "John Doe", balance: 500 }]
  };

  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/all-data" element={<AllData />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App;