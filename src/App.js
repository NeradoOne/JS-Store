import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/products' element={<ItemList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

