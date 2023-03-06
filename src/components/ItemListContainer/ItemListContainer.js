import './ItemListContainer.scss'


const ItemListContainer = ({greeting}) => {

    return(
        <div className="listContainer">
            <h2 className="listContainerTitle">SERVICIOS</h2>
            <p className="listContainerMessage">{greeting}</p>
            <img className="workInProgress" src="./imgs/giphy.gif" alt="Work in progress"/>
        </div>
    )
}

export default ItemListContainer