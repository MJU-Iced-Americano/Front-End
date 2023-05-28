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
import Course from "./Course/CourseMainPage";
import InfoTeacher from "./InfoTeacher/InfoTeacher";
import InfoTeacherList from "./InfoTeacher/InfoTeacherList";
import MyBasket from "./MyBasket/MyBasket";
import QnADetailPage from "./QnA/QnADetailPage";
import OperatorPage from "./Operator/OperatorMain";
import CoOpManagePage from "./Operator/CoOpManage/OperatorCoOp";
import CoOpAddPage from "./Operator/CoOpManage/OperatorCoOpAdd";
import CoOpModifyPage from "./Operator/CoOpManage/OperatorCoOpModify";
import CoOpDeletePage from "./Operator/CoOpManage/OperatorCoOpDelete";
import LecturePage from "./Lecture/LecturePage";
import LectureRegistPage from "./Lecture/LectureRegistPage";
import QnAManagePage from "./Operator/QnAManage/OperatorQnA";
import QnADeletePage from "./Operator/QnAManage/OperatorQnADelete";
import ReportManagePage from "./Operator/ReportManage/OperatorReport";
import ReportQnAPage from "./Operator/ReportManage/OperatorQnAReport";
import ReportQnAOnePage from "./Operator/ReportManage/OperatorQnAReportOne";
import ReportCommendPage from "./Operator/ReportManage/OperatorCommendReport";
import ReportCommendOnePage from "./Operator/ReportManage/OperatorCommendReportOne";
import OperatorFAQList from "./Operator/FAQManage/OperatorFAQList";
import FAQSearchResultPage from "./FAQ/FAQSearchResultPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ComplaintModal from "./Course/components/ComplaintModal";
import CourseRegisterPage from "./Teacher/CourseRegisterPage";
import React from "react";
import axios from 'axios';


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
          <Route path="/FAQSearchResultPage" element={<FAQSearchResultPage />}></Route>
          <Route path="/courseList" element={<CourseList/>}></Route>
          <Route path="/InfoTeacher" element={<InfoTeacher/>}></Route>
          <Route path="/InfoTeacherList" element={<InfoTeacherList />}></Route>
          <Route path="/MyBasket" element={<MyBasket/>}></Route>
          <Route path="/QnAPage/QnADetailPage/:id" element={<QnADetailPage />}></Route>
          <Route path="/LecturePage" element={<LecturePage />}></Route>
          <Route path="/LectureRegistPage" element={<LectureRegistPage />}></Route>
          <Route path="/OperatorPage" element={<OperatorPage />}></Route>
          <Route path="/OperatorPage/CoOpManage" element={<CoOpManagePage />}></Route>
          <Route path="/OperatorPage/CoOpManage/Add" element={<CoOpAddPage />}></Route>
          <Route path="/OperatorPage/CoOpManage/Modify" element={<CoOpModifyPage />}></Route>
          <Route path="/OperatorPage/CoOpManage/Delete" element={<CoOpDeletePage />}></Route>
          <Route path="/OperatorPage/QnAManage" element={<QnAManagePage />}></Route>
          <Route path="/OperatorPage/QnAManage/Delete" element={<QnADeletePage />}></Route>
          <Route path="/OperatorPage/OperatorFAQList" element={<OperatorFAQList />}></Route>

          <Route path="/Course" element={<Course/>}></Route>
          <Route path="/Course/:courseIndex" element={<Course/>}></Route>
          {/*<Route path="/ComplaintModal" element={<ComplaintModal/>}></Route>*/}
          <Route path="/Teacher/CourseRegisterPage" element={<CourseRegisterPage/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
