import { Link } from "react-router-dom"


const Item = ({item}) => {
    
    return (
                <div className="col-3 m-2">
                    <h4>{item.name}</h4>
                    <img src={item.img}/>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                    <p><small>Categoría: {item.category}</small></p>
                    <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>                </div>
    )
}

export default Item