import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import './Cart.scss' 



const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className="container my-5">
            <h2>No hay productos en el carrito</h2>
            <Link className="btn btn-primary" to="/">Volver</Link>
            </div>
        )
    }

    

    return(
        <div className="container my-5">
            <h2>Tu compra</h2>
            
            
            {
                cart.map((item)=> (
                <div key={item.id} className="rowCart">
                    <h4>{item.nombre}</h4>
                    <img src={item.img} width="25%"/>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio (un): ${item.precio}</p>
                    <p>Precio total: ${item.precio * item.cantidad}</p>
                    <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                </div>
            ))
            }
            
            
                <h3>Total de la compra: ${totalCarrito()}</h3>
                <Link to ="/checkout" className="btn btn-success m-2">Finalizar compra</Link>
                <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
                
                <div>
                    <Link to="/" className="btn btn-primary m-1">Seguir comprando</Link>
                </div>
                
        </div>
    )
}

export default Cart