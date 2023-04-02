import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Info from "./Information/Info";

function App() {
  return (
      <div className={"App"}>
        <BrowserRouter>
          <Routes>
            <Route path={"/Info"} element={<Info />}>회사소개</Route>
          </Routes>
        </BrowserRouter>

      </div>
  );
}


export default App;
