import '../../styles/Footer/footer.css';
import SocoaF from '../../assets/Footer/socoa-ver2.png';

const Footer =() => {
    return (
        <footer className="footer">
            <div className="footerAreaLeft">
                <div className="logoBG">
                    <img src={SocoaF} alt='logo image' className="socoaLogoF"/>
                </div>
                <div className="logoUnder">
                    <p>개인정보처리방침 | 이용약관 </p>
                </div>
                <div className="textField">
                    (주)제이유컨설팅 | 대표자: 정진성 | 사업자번호: 314-86-24768
                </div>
                <div className="textField">
                    주소: 경기도 성남시 분당구 불정로 397 308-1102
                </div>
                <div className="textField uphere">
                    ©JUCONSULTING. ALL RIGHTS RESERVED
                </div>

            </div>
        </footer>
    )
}

export default Footer;