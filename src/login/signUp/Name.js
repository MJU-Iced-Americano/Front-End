import { useNavigate } from "react-router-dom";

export default function Name() {
    const movePage = useNavigate();

    function gohome(){
        movePage('/user/Main');
    }
    return (
        <div className="Name">
            마이페이지 입니다.
            <button onClick={gohome}>홈으로이동</button>
        </div>
    );
}