import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <div className="container body-container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
    </ShoppingCartProvider>
  )
}

export default App
