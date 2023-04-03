import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Name from "./login/signUp/Name";
import Main from "./MainTest";
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
              <Route path={"/Name"} element={<Name />}></Route>
              <Route path={"/Main"} element={<Main />}></Route>
              <Route path={"/ToLoginModal"} element={<ToLoginModal />}></Route>
          </Routes>
          </BrowserRouter>

      </div>
  );
}
export default App;
