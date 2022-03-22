import Header from "../components/header";
import "../style/designs.scss";
import Images from "../components/tShirts.json";
import { Link } from "react-router-dom";

function Designs() {

   

    return (
        <>
            <Header />

            {
                Images && Images.map((image, index) => 
                    
                    <Link to= {`./display/?src=${image.file}&title=${image.title}`}
                        key= { index }>
                        <div className="imgBox">
                            <img
                                src={image.file}
                                alt={image.file}
                                width={image.width}
                                height={image.height}
                            />
                            <p key={image.id * 40}>{image.title}</p>
                        </div>
                    </Link>
                )
            }

        </>
    )
}

export default Designs
