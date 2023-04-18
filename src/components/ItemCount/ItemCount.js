


const ItemCount = ({max, cantidad, setCantidad, agregar}) => {


    const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
    }


    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary m-1">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-outline-primary m-1">+</button>
        
            <div>
                <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
            </div>
        
        </div>
    )
}

export default ItemCount