import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";



const Gallery = () => {
    console.log(window);

    const [beers, setBeers] = useState([]);

    useEffect(() => {

        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setBeers(json)
            })

    }, []);

    return (
        <div className="gallery-map">
            {beers.map((item, i) => {
                return (
                    <div className="gallery-container">
                        <div className="gallery-image">
                            <img key={i} src={item.image_url} alt="bild" />
                        </div>
                        <div className="gallery-discription">
                            <h2>{item.name}</h2>
                            <h3>{item.tagline}</h3>
                            <p>Created by: {item.name}</p>
                            <Link className="btn-detail" key={item._id} to={`/detail/${item._id}`}>Details</Link>
                        </div>
                    </div>
                )
            })}

            <Nav />
        </div>

    );
}

export default Gallery;
