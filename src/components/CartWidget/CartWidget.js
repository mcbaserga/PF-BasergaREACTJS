import { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)


    return(
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsCart4 className='cartIcon'/>
            <span className="cartSpan">{totalCantidad()}</span>
        </Link>    
    )
}

export default CartWidget