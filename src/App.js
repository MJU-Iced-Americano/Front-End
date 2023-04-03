import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import Information from "./Information/Info";
import Name from "./Login/SignUp/Name";
import Main from "./Login/MainLoginPage";
import ToLoginModal from "./Login/ToLoginModal";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Information" element={<Information/>}/>
            <Route path={"/user/Name"} element={<Name />}></Route>
            <Route path={"/user/Main"} element={<Main />}></Route>
            <Route path={"/user/ToLoginModal"} element={<ToLoginModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
