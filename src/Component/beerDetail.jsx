import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import Nav from "./nav";

const BeerDetail = () => {
    const { _id } = useParams();
    const { data: beer, error, isPending } = useFetch(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)

    return (
        <section>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {beer && (
                <article className="beerDetail-container">
                    <div className="beerDetail-image">
                        <img src={beer.image_url} alt="bild" />
                    </div>
                    <div className="beerDetail-discription">
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <div className="beerDetail-discription-metaInfo">
                            <p className="column-left">First brewed:</p>
                            <p className="column-right">{beer.first_brewed}</p>
                            <p className="column-left">Attenuation level:</p>
                            <p className="column-right">{beer.attenuation_level}</p>
                        </div>
                        <p>{beer.description}</p>

                        <Link className="btn-back" to={-1}>
                            <img className="logo" src="/image/Back.svg" alt="bild" />
                        </Link>
                    </div>
                </article>
            )}
            <Nav />
        </section >
    );
}

export default BeerDetail;