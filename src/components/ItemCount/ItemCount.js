


const ItemCount = ({cantidad, setCantidad, agregar}) => {


    const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }


    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-outline-primary">+</button>
        
            <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
        
        
        </div>
    )
}

export default ItemCount