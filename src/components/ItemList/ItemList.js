import Item from '../Item/Item'



const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="listContainerTitle">SERVICIOS</h2>
            
            <div className='row'>
                { items.map ((producto) => <Item key={producto.id} item={producto}/>) } 
            </div>
        </div>

    )

}

export default ItemList