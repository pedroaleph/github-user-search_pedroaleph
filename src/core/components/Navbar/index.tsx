import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="main-nav">
        <Link to="/" className="main-nav-title">
                Bootcamp DevSuperior
        </Link>
    </nav>
)

export default Navbar;