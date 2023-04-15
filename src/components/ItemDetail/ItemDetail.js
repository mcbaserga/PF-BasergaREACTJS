import { Component, useContext, useState } from "react"
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
            <p>{item.notas}</p>
            <p>Precio: ${item.precio}</p>

            {
                isInCart(item.id)
                ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                : <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}     
                    agregar={handleAgregar}       
            />

            }

            <Link to="/" className="btn btn-primary m-1">Seguir comprando</Link>



        </div>
    )


}


export default ItemDetail