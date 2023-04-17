import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';


function App() {


  return (
    
      <CartProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/' element={ <ItemListContainer /> }/>
                  <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
                  <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
                  <Route path='/cart' element={ <Cart /> } />
                  <Route path='/checkout' element={ <Checkout /> } />
                  <Route path='/contacto' element={ <Contacto /> }/>
                  <Route path='*' element={ <Navigate to={"/"}/> }/>
              </Routes>
              </BrowserRouter>
      </CartProvider>

  );
}

export default App;