import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { writeBatch, collection, where, documentId, addDoc, getDocs, query, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'



const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Campo obligatorio'),
    direccion: Yup.string()
        .required('Campo obligatorio'),
    email: Yup.string()
        .email('El email es incorrecto')
        .required('Campo obligatorio'),
})

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

    const batch = writeBatch(db)


    const ordersRef = collection(db, "orders")
    const produtosRef = collection(db, "productos")
    const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

    const productos = await getDocs(q)

    const outOfStock = []

    productos.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id)
        
        if (doc.data().stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        await batch.commit()
        const { id } = await addDoc(ordersRef, orden)
        setOrderId(id)
        vaciarCarrito()
    } else {
        alert("Hay items sin stock: " + outOfStock.map(i => i.nombre).join(', '))
    }
}



    if (orderId){
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <p><strong>Tu número de orden es: {orderId}</strong></p>
                <Confetti/>
                <Link to="/" className="btn">Volver al inicio</Link>
            </div>

        )
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return (
            <div className="container my-5">
                <h2>Ingresá tus datos</h2>


                <Formik
                    validationSchema={schema}
                    initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''

                    }}
                    onSubmit={generarOrden}
                >
                    {({values, errors, handleChange, handleSubmit})=> (
                    <form onSubmit={handleSubmit}>
                        
                    <h4>Datos de Contacto</h4>
                    <input
                        value={values.email}
                        type="email"
                        className="form-control my-2"
                        placeholder="E-mail (*requerido)"
                        name="email"
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    
                    <h4>Datos de Entrega</h4>
                    <input
                        value={values.nombre}
                        type="text"
                        className="form-control my-2"
                        placeholder="Nombre y apellido (*requerido)"
                        onChange={handleChange}
                        name="nombre"
                    />
                    {errors.nombre && <p>{errors.nombre}</p>}

                    <input
                        value={values.direccion}
                        type="text"
                        className="form-control my-2"
                        placeholder="Tu direccion (*requerido)"
                        name="direccion"
                        onChange={handleChange}
                    />
                    {errors.direccion && <p>{errors.direccion}</p>}

                    <input
                        value={values.codigoPostal}
                        type="number"
                        className="form-control my-2"
                        placeholder="Código postal"
                        name="codigoPostal"
                        onChange={handleChange}
                    />
                    
                    
                    
    
                    <button className="btn btn-primary" type="submit">Enviar</button>
                    
                </form>)}
            </Formik>
    
                
            </div>
    )
}

export default Checkout