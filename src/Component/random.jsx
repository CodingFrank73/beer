
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";

const Random = () => {

    const [beer, setBeer] = useState([]);

    useEffect(() => {

        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(resp => resp.json())
            .then(json => {
                setBeer(json)
            })

    }, []);
    return (
        <>
            <div className="gallery-image">
                <img src={beer.image_url} alt="bild" />
            </div>
            <div className="gallery-discription">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <div>
                    <p>First brewed: {beer.first_brewed}</p>
                    <p>Attenuation level: {beer.attenuation_level}</p>
                </div>
                <p>{beer.description}</p>

                <Link className="btn-back" to={`/`}>
                    <img className="logo" src="/image/Back.svg" alt="bild" />
                </Link>

            </div>
            <Nav />
        </>
    );
}

export default Random;
