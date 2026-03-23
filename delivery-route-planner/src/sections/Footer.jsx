import MapBtn from "../features/MapBtn";
import ResetBtn from "../features/ResetBtn";
import SendBtn from "../features/SendBtn";
import "./Footer.css"

function Footer() {
    return(
        <div className="footer">
            <ResetBtn />
            <SendBtn />
            <MapBtn />
        </div>
    ) 
};

export default Footer;