import { Link } from "react-router-dom"
import './Item.scss'



const Item = ({item}) => {


    return (
                <div className="col-4 my-5">
                    <img src={item.img} width="100%"/>
                    <div className="card p-2">
                        <h5>{item.nombre} - {item.peso} g</h5>
                        <p>Tostado: {item.tostado}</p>
                        <h5>${item.precio}</h5>
                        <Link to={`/detail/${item.id}`} className='btn btn-primary mx-5 my-2'>Ver más detalles</Link>

                

                    </div>

                </div>
    )
}

export default Item