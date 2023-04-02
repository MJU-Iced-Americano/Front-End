//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Name from "./login/signUp/Name";
import Main from "./login/MainLoginPage";
//import Popup from "./login/StaticExample";
import Modal from './commons/components/Modal.js'
import Button from 'react-bootstrap/Button';
import ToLoginModal from "./login/ToLoginModal.js";


function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    const showModal = () => {
        setModalOpen(true);
    };

  return (
      <div className={"App"}>
      <BrowserRouter>
          <Routes>
              <Route path={""} element={<Main />}></Route>
              <Route path={"/user/Name"} element={<Name />}></Route>
              <Route path={"/user/Main"} element={<Main />}></Route>
              <Route path={"/user/ToLoginModal"} element={<ToLoginModal />}></Route>
          </Routes>
          </BrowserRouter>

      </div>
  );
}
export default App;
