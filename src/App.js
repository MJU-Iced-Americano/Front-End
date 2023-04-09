import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import Information from "./Information/Info";
import FAQPage from "./FAQ/FAQPage";
import RegularFAQ from "./FAQ/RegularFAQ";
import Name from "./login/signUp/Name";
import Main from "./login/MainLoginPage";
import ToLoginModal from "./login/ToLoginModal";
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
            <Route path="/FAQPage" element={<FAQPage />}></Route>
            <Route path="/RegularFAQ" element={<RegularFAQ />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
