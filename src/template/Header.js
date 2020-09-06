import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header =()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">Tambah</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header