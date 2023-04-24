import './Info.css';
import axios from 'axios';
import {useState, useEffect, useRef} from "react";

function CopInfo(index) {
    const [cop, setCop] = useState(null);

    useEffect(() => {
        const fetchCop = async () => {
            const insurance = await axios.get(
                `http://localhost:8080/insurance/insinfo/${index}`
            );
        };
        fetchCop();
    }, []);

    return (
      <h6>gd</h6>
    );
}



export default CopInfo;