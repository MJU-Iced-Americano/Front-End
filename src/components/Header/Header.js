import '../../styles/Header/Header.css';
import {IoMdMenu} from 'react-icons/io';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import Socoa from '../../assets/Footer/socoa-ver2.png';


const Header = ()=> {
    return (
        <header className="header">
            <div className="iconSect">
                <a href="/"> <IoMdMenu className="menuBtn"/> </a>
                <a href="/"><img src={Socoa} alt='logo image' className="SocoaLogo"/></a>
                <div className="category-menu">
                    <div className="hotNavBtn">
                        <a href="/Information" className="btnMainItem">회사소개 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/Information">비전 및 목표</a>
                            <a className="navbar-item" href="/Information">회사 연혁</a>
                            <a className="navbar-item" href="/InfoTeacherList">강사진 소개</a>
                        </div>
                    </div>
                    <div className="hotNavBtn">
                        <a href="/courseList" className="btnMainItem"> 강의목록 </a>
                    </div>
                    <div className="hotNavBtn">
                        <a href="/FAQPage" className="btnMainItem"> 커뮤니티 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/FAQPage">자주 묻는 질문</a>
                            <a className="navbar-item" href="/QnAPage">질문 & 답변</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loginSect">
                <div className="loginBtn"> <a href="http://socoa-login.site/user/login"> Login </a></div>
                <a href="/OperatorPage"> <AiOutlineUser className="userBtn"/> </a>
                <a href="/MyBasket"><RiShoppingCartLine className="cartBtn"/> </a>
            </div>
        </header>
    )
}

export default Header;