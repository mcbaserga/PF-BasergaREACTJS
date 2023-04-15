import Item from '../Item/Item'



const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="listContainerTitle">Productos - Shop Online</h2>
            <h3>Encontrá el café en granos que estabas buscando en el Shop online de nuestro sitio web.</h3>
            <p>Somos vendedores de café premium Puerto Blest ©</p>

            <div className='row'>
                { items.map ((producto) => <Item key={producto.id} item={producto}/>) } 
            </div>
        </div>

    )

}

export default ItemList