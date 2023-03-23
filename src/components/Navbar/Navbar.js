import './Navbar.scss'
import logo from '../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return(
        <header className="header">
            <div className="headerContainer">
                <Link to="/"><img src={logo} className="headerLogo" alt="logo"/></Link>
                
                <nav className="navbar">
                    <Link to="/nosotros" className="navbarLink">Nosotros</Link>
                    <Link to="/" className="navbarLink">Servicios</Link>
                    <Link to="/servicios/masajes" className="navbarLink">Masajes</Link>
                    <Link to="/servicios/drenaje" className="navbarLink">Drenajes linfáticos</Link>
                    <Link to="/contacto" className="navbarLink">Contacto</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}