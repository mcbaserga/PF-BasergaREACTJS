import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import LoginScreen from './components/LoginScreen/LoginScreen';
import { LoginProvider } from './context/LoginContext';



function App() {


  return (

    <LoginProvider>
      <CartProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                  <Route path='/' element= {<ItemListContainer/>} />
                  <Route path='/nosotros' element= {<Nosotros/>} />
                  <Route path='/servicios/:categoryId' element= {<ItemListContainer/>} />
                  <Route path='/contacto' element= {<Contacto/>} />
                  <Route path='/detail/:itemId' element={ <ItemDetailContainer/>} />
                  <Route path='/cart' element={ <Cart/>} />
                  <Route path='/login' element={ <LoginScreen/> } />

                </Routes>

            </BrowserRouter>    
      </CartProvider>
    </LoginProvider>


  );
}

export default App;
