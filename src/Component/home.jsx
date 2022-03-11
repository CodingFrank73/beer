import '../App.css';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <figure>
                <img src="/image/Bild1.png" alt="BierBild1" />
                <Link to="gallery">
                    <figcaption><h2>All Beers</h2></figcaption>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione tempora atque iure sed! Aperiam dignissimos quo sapiente, laborum perspiciatis ratione perferendis.</p>
            </figure>

            <figure>
                <img src="/image/Bild2.png" alt="BierBild2" />
                <Link to={`/random`}>
                    <figcaption><h2>Random Beer</h2></figcaption>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dignissimos quo sapiente, laborum perspiciatis ratione perferendis doloremque hic quod aliquam voluptatibus nemo quam quisquam.</p>
            </figure>
        </div>

    );
}

export default Home;