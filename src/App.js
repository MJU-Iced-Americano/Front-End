import './App.css';
import MainPage from "./MainPage";
import Information from "./Information/Info";
import FAQPage from "./FAQ/FAQPage";
import RegularFAQ from "./FAQ/RegularFAQ";
import EduFAQ from "./FAQ/EduFAQ";
import QnAPage from "./QnA/QnAPage";
import Name from "./Login/SignUp/Name";
import Main from "./Login/MainLoginPage";
import Question from "./QnA/Question/Question";
import ToLoginModal from "./Login/ToLoginModal";
import CourseList from "./courselist-page/CourseListPage";
import InfoTeacher from "./InfoTeacher/InfoTeacher";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Information" element={<Information/>}/>
          <Route path="/user/Name" element={<Name />}></Route>
          <Route path="/user/Main" element={<Main />}></Route>
          <Route path="/QnAPage/Question" element={<Question />}></Route>
          <Route path="/user/ToLoginModal" element={<ToLoginModal />}></Route>
          <Route path="/FAQPage" element={<FAQPage />}></Route>
          <Route path="/RegularFAQ" element={<RegularFAQ />}></Route>
          <Route path="/EduFAQ" element={<EduFAQ />}></Route>
          <Route path="/QnAPage" element={<QnAPage />}></Route>
          <Route path="/courseList" element={<CourseList/>}></Route>
<<<<<<< HEAD
          <Route path="/InfoTeacher" element={<InfoTeacher/>}></Route>

=======
>>>>>>> ab5f463b30c47c1e0af16932ebca6d6a7d8538a1
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
