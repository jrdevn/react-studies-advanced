import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components 
import Navbar from './components/Navbar';

// pages
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<PageOne/>}/>
          <Route path='/page2' element={<PageTwo/>}/>
          <Route path='/page3' element={<PageThree/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
