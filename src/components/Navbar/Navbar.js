import './Navbar.scss'
import logo from '../assets/logo/logo-no-background.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return(
        <header className="header">
            <div className="headerContainer">
                <Link to="/"><img src={logo} className="headerLogo" alt="logo"/></Link>
                
                <nav className="navbar">
                    <Link to="/" className="navbarLink">Productos</Link>
                    <Link to="/tostado-medio" className="navbarLink">Tostado medio</Link>
                    <Link to="/tostado-oscuro" className="navbarLink">Tostado oscuro</Link>
                    <Link to="/contacto" className="navbarLink">Contacto</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}