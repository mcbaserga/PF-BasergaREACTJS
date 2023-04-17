import { Link } from "react-router-dom"


const Item = ({item}) => {
    
    return (
                <div className="col-4 my-5">
                    <h4>{item.nombre} - {item.peso} g</h4>
                    <img src={item.img} width="80%"/>
                    <p>Notas: {item.notas}</p>
                    <p><small>Tostado: {item.tostado}</small></p>
                    <h5>Precio: ${item.precio}</h5>
                    <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más detalles</Link>                
                </div>
    )
}

export default Item