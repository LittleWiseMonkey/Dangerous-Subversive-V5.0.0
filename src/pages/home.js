import { Link } from "react-router-dom";
import "../style/home.scss";

function Home() {

    // console.log(node);

    return (
        <div className="page">

            {/***       OVERLAY     *******************/}
            <div className="overlay"></div>

            {/***       FROSTED CONTAINER     ***********/}
                <div className="container" id="glass">
                    <h2 className="seq">Deny everything...</h2>
                </div>

            {/***       TITLE TEXT        ******************/}
            <div className="text">
                <Link to="/designs">
                <h1>Dangerou<span>S</span>ubversive</h1>
                </Link>
            </div>

            {/***CREDITS     **********************/}
            <div className="credits">
                <b>
                    <a href="http://www.littlewisemonkey.com">&copy; Copyright: Little
                        Wise Monkey. 2021</a>
                </b>
            </div>

        </div >
    )
}

export default Home
