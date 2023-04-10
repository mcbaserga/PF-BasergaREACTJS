import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"



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
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <img src={item.img}/>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Precio total: ${item.price * item.cantidad}</p>
                    <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                </div>
            ))
            }
                <h3>Total de la compra: ${totalCarrito()}</h3>
                <Link to ="/checkout" className="btn btn-success m-2">Finalizar compra</Link>
                <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
        </div>
    )
}

export default Cart