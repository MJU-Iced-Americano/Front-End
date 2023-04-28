import '../../styles/Body/Body.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Body=function({children}){
    return(
        <div className="root">
            <Header/>
                <div className="Body-Frame">
                    {children}
                </div>
            <Footer/>
        </div>
    );
}

export default Body;