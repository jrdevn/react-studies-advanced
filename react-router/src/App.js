import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



//components

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search'


function App() {
  return (
    <div className="App">
      <h1> Este conteudo não muda</h1>
      <BrowserRouter>
      <Navbar/>
        {/* search */}
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* rota dinamica */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* nested route */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* search */}
          <Route path='/search' element={<Search/>}/>
          {/* redirect */}
          <Route path='/company' element={<Navigate to="/about"/>}/>
          {/* pagina 404 - sempre tem que ser o ultimo (convenção) */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
