import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Name from "./login/signUp/Name";
import Main from "./login/MainLoginPage";
import Popup from "./login/StaticExample";
import React from "react";

function App() {
  return (
      <div className={"App"}>
      <BrowserRouter>
          <Routes>
              <Route path={""} element={<Main />}></Route>
              <Route path={"/user/Name"} element={<Name />}></Route>
              <Route path={"/user/Main"} element={<Main />}></Route>
              <Route path={"/user/Popup"} element={<Popup />}></Route>
          </Routes>
          </BrowserRouter>

      </div>
  );
}
export default App;
