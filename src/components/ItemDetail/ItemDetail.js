import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import ItemCount from "../ItemCount/ItemCount"




const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    isInCart(item.id)
    
    
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        
        agregarAlCarrito(newItem)
    }
    
    return (
        <div>
            <h2>{item.nombre}</h2>
            <img src= {item.img} width="25%" alt={item.nombre}/>
            <h5>Peso: {item.peso} gramos</h5>
            <p>Molido: {item.molido}</p>
            <p>Notas: {item.notas}</p>

            <h4>${item.precio}</h4>

            {
                isInCart(item.id)
                ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                : <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}     
                    agregar={handleAgregar}
                    max={item.stock}       
            />

            }

            <div>
            <Link to="/" className="seguirComprando">Seguir comprando</Link>
            </div>


        </div>
    )


}


export default ItemDetail