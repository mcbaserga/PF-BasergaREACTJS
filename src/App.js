import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Hola! En breve podrás ver todos los servicios que ofrecemos y comprarlos por nuestra web."}/>
    </div>
  );
}

export default App;
