import './Header.css';
import {IoMdMenu} from 'react-icons/io';
import {AiOutlineUser} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import Socoa from '../socoa-ver2.png';


const Header = ()=> {
    return (
        <header className="header">
            <div className="iconSect">
                <a href="/"> <IoMdMenu className="menuBtn"/> </a>
                <a href="/"><img src={Socoa} alt='logo image' className="SocoaLogo"/></a>
                <div className="category-menu">
                    <div className="hotNavBtn">
                        <a href="/" className="btnMainItem">회사소개 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/">비전 및 목표</a>
                            <a className="navbar-item" href="/">회사 연혁</a>
                            <a className="navbar-item" href="/">강사진 소개</a>
                        </div>

                    </div>
                    <div className="hotNavBtn">
                        <a href="/" className="btnMainItem"> 강의목록 </a>
                    </div>
                    <div className="hotNavBtn">
                        <a href="/" className="btnMainItem"> 커뮤니티 </a>
                        <div className="btnSubItem">
                            <a className="navbar-item" href="/">자주 묻는 질문</a>
                            <a className="navbar-item" href="/">질문 & 답변</a>
                        </div>
                    </div>


                </div>
            </div>
            <div className="loginSect">
                <div className="loginBtn"> <a href="/"> Login </a></div>
                <a href="/"> <AiOutlineUser className="userBtn"/> </a>
                <a href="/"><RiShoppingCartLine className="cartBtn"/> </a>
            </div>
        </header>
    )
}

export default Header;