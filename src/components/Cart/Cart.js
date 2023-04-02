import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'



const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

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
        <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>


        </div>
    )
}

export default Cart