import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    
    const { categoryId } = useParams()

    useEffect(()=>{
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("categoria", "==", categoryId))
                    : productosRef

        getDocs(q)
            .then((res) => {
            setProductos( res.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
                }
            }))
        })

    }, [categoryId])


    return(
        <div className="listContainer">
                <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer