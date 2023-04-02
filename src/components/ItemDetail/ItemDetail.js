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
            <h2>{item.name}</h2>
            <img src= {item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            {
                isInCart(item.id)
                ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                : <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}     
                    agregar={handleAgregar}       
            />

            }




        </div>
    )


}

export default ItemDetail