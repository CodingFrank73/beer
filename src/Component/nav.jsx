import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Link to="/">
            <img className="nav" src="/image/Header.png" alt="beer" />
        </Link>
    );
}

export default Nav;