import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/nosotros' element= {<Nosotros/>} />
        <Route path='/servicios/:categoryId' element= {<ItemListContainer />} />
        <Route path='/contacto' element= {<Contacto/>} />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
