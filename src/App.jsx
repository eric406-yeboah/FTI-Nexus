import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/CreateAccount" element={<CreateAccount />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
