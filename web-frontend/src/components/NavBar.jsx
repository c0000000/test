import "./NavBar.css"
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavLink className="navbar-link-logo"to="/">
                <img src="" alt="" className='navbar-logo' />
            </NavLink>
            <div className="navbar-links">
                <NavLink className="navbar-link" to="/about">About</NavLink>
                <NavLink className="navbar-link" to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
