import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import ItemCategoryContainer from './components/ItemCategoryContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartContextProvider from './context/cartContextProvider';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:type' element={<ItemCategoryContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

