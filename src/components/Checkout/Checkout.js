import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
        console.log(values)

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        const ordersRef = collection(db, "orders")


        addDoc(ordersRef, orden)
        .then((doc)=> {
            console.log(doc.id)
            setOrderId(doc.id)
            vaciarCarrito()
        })
    }

    if (orderId){
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <p>Tu número de orden es: {orderId}</p>
            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return (
            <div className="container my-5">
                <h2>Ingresa tus datos</h2>
    
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.nombre}
                        type="text"
                        className="form-control my-2"
                        placeholder="Tu nombre"
                        onChange={handleInputChange}
                        name="nombre"
                    />
                    <input
                        value={values.direccion}
                        type="text"
                        className="form-control my-2"
                        placeholder="Tu direccion"
                        name="direccion"
                        onChange={handleInputChange}
                    />
                    <input
                        value={values.email}
                        type="email"
                        className="form-control my-2"
                        placeholder="Tu email"
                        name="email"
                        onChange={handleInputChange}
                    />
    
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>

    )
}

export default Checkout