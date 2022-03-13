import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-Wrapper'>
            <Link to="/">
                <img className="nav" src="/image/Header.png" alt="beer" />
            </Link>
        </div>

    );
}

export default Nav;