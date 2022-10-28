import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import images from '../../assets/kalam_bg.jpg';

export const Navbar = () => {
    return (
        <nav className="my-navbar">
            <img className='logo' src={images}/>
            <ul >
                <li className="nav-item nav-li">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item nav-li">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>

                <li className="nav-item dropdown nav-li">
                    <Link className="nav-link dropdown-toggle" to="/awards" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Awards and Honours
                    </Link>
                    <ul className="dropdown-menu drop-li">
                        <li className='drop-li'><Link className="dropdown-item" to="/awards">Island</Link></li>
                        <li className='drop-li'><Link className="dropdown-item" to="/awards">Roads</Link></li>
                        <li className='drop-li'><Link className="dropdown-item" to="/awards">Plant Species</Link></li>
                        <li className='drop-li'><hr className="dropdown-divider" /></li>
                        <li className='drop-li'><Link className="dropdown-item" to="/awards">Other awards and honours</Link></li>
                    </ul>
                </li>

                <li className="nav-item nav-li">
                    <Link className="nav-link active" aria-current="page" to="/career">Career</Link>
                </li>

                <li className="nav-item nav-li">
                    <Link className="nav-link active" aria-current="page" to="/books">Books</Link>
                </li>

                <li className="nav-item dropdown nav-li">
                    <Link className="nav-link dropdown-toggle" to="/religion" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Religion
                    </Link>
                    <ul className="dropdown-menu drop-li">
                        <li className='drop-li'><Link className="dropdown-item" to="/religion">Islam</Link></li>
                        <li className='drop-li'><Link className="dropdown-item" to="/religion">Syncretism</Link></li>
                        <li className='drop-li'><Link className="dropdown-item" to="/religion">Pramukh </Link></li>
                    </ul>
                </li>

            </ul>
        </nav>
    )
};
