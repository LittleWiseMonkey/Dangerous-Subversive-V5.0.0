import { useLocation } from "react-router-dom";
import Header from "../components/header";
import '../style/display.scss'

function Display() {

    let info = useLocation();
    let newInfo = info.search.replace('?src=', '');
    info = newInfo.split('&')
    let src = info[0];
    let tempTitle1 = info[1];
    let tempTitle = tempTitle1.replaceAll('%20', ' ');
    let title = tempTitle.replace('title=', '');

    return (
        <>
            <Header />
            <div className="imgDisplay">
                <img src={`../${src}`} alt="" />
                {title}
            </div>
        </>
    )
}

export default Display
