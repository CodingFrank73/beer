import { Link } from "react-router-dom";
import useFetch from './useFetch';
import Nav from "./nav";

const BeerList = () => {

    const { data: beers, error, isPending } = useFetch('https://ih-beers-api2.herokuapp.com/beers')


    return (
        <div className="beerList-map">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {beers && (
                beers.map((item, i) => {
                    return (
                        <div className="beerList-container" key={i}>
                            <div className="beerList-image">
                                <img src={item.image_url} alt="bild" />
                            </div>
                            <div className="beerList-discription">
                                <h2>{item.name}</h2>
                                <h3>{item.tagline}</h3>
                                <p>Created by: {item.name}</p>
                                <Link className="btn-detail" key={item._id} to={`/beer/${item._id}`}>Details</Link>
                            </div>
                        </div>
                    )
                }))}
            <Nav />
        </div>
    );
}

export default BeerList;