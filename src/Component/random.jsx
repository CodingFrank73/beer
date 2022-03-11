
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
        <section>
            <article className="detail-container">
                <div className="detail-image">
                    <img src={beer.image_url} alt="bild" />
                </div>
                <div className="detail-discription">
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <div className="detail-discription-metaInfo">
                        <p className="column-left">First brewed:</p>
                        <p className="column-right">{beer.first_brewed}</p>
                        <p className="column-left">Attenuation level: </p>
                        <p className="column-right">{beer.attenuation_level}</p>
                    </div>
                    <p>{beer.description}</p>

                    <Link className="btn-back" to={`/`}>
                        <img className="logo" src="/image/Back.svg" alt="bild" />
                    </Link>
                </div>
            </article>
            <Nav />
        </section>
    );
}

export default Random;
