import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="container body-container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
