
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Categorie from './Pages/Catégorie';
import Home from './Pages/Homes';
import NewArticle from './Pages/NewArticle';
import NewCategorie from './Pages/NewCatégorie';
import NotFound from './Pages/NotFound';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:slug' element={<Categorie/>}/>
          <Route path='/NewCategorie' element={<NewCategorie/>}/>
          <Route path='/NewArticle/:slug' element={<NewArticle/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
