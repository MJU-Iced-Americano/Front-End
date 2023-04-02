
import { useNavigate } from "react-router-dom";

export default function MainLoginPage() {
    const movePage = useNavigate();
    function goName(){
        movePage('/user/Name');
    }

    function goPopup(){
        movePage('/user/Popup');
    }
    return (

        <div className="Main">
            홈 입니다.
            첫 페이지
            <button onClick={goName}>네임으로이동</button>
            <button onClick={goPopup}>팝업으로이동</button>
        </div>
    );
}