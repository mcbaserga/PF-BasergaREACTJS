import { Link } from "react-router-dom"
import './Item.scss'



const Item = ({item}) => {


    return (
                <div className="col-4 my-5">
                    <img src={item.img} width="80%"/>
                    <div>
                        <h4>{item.nombre} - {item.peso} g</h4>
                        <p>Notas: {item.notas}</p>
                        <p>Tostado: {item.tostado}</p>
                    </div>
                    <h5>Precio: ${item.precio}</h5>
                    
                    <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más detalles</Link>     
                </div>
    )
}

export default Item