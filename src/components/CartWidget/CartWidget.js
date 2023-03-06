import { BsCart4 } from 'react-icons/bs'
import './CartWidget.scss'


const CartWidget = () => {

    return(
        <div className="cartWidget">
            <BsCart4 className='cartIcon'/>
            <span className="cartSpan">0</span>
        </div>    
    )
}

export default CartWidget