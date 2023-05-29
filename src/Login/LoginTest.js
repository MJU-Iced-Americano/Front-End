import React, {useEffect, useState} from "react";
import axios from 'axios';

const LoginTest =() => {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': 'Bearer my-token' };
        axios.get('http://socoa.online/', { headers })
            .then(response => setProduct(response.data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h3 class="p-3 text-center">React Bearer Token with Axios</h3>
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Bearer Token Authorization Header</h5>
                <div className="card-body">Product name: {product?.name}</div>
            </div>
        </div>
    );

}

export default LoginTest;