import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
