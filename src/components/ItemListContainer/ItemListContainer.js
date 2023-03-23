import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'




const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])

    const {categoryId}  = useParams()
    console.log(categoryId)


    useEffect(()=>{
        pedirDatos()
        .then((res) => {
            if (categoryId){
                setProductos( res.filter((prod) => prod.category === categoryId) )
            } else{
                setProductos(res)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryId])

    return(
        <div className="listContainer">
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer