import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'


export const Navbar = () => {

    return(
        <header className="header">
            <div className="headerContainer">
                <img src="./imgs/logo.png" className="headerLogo" alt="logo"/>
                <nav className="navbar">
                    <p className="navbarLink">Nosotros</p>
                    <p className="navbarLink">Servicios</p>
                    <p className="navbarLink">Promociones</p>
                    <p className="navbarLink">Contacto</p>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}