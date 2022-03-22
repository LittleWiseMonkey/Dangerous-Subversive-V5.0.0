import "../style/header.scss";
import Logo from "../images/logo_White.gif"

function Header() {

    return (
        <>
            {/***       HEADER      *********/}
            <div className="header">

                {/***       Logo Image      *******/}
                <div className="imgContainer">
                    <img src={Logo} alt="DS Logo" />
                </div>

                {/***       Title Text      *********/}
                <div className="title">
                        <h1>Dangerou<span>S</span>ubversive</h1>
                </div>

                {/***       Third Box  **********/}
                <div className="thirdBox">
                    Something goes in here
                </div>

            </div>

            {/***       STRAPLINE       **********/}
            <div className="strapline">

            </div>

        </>
    )
}

export default Header
