import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Layout/Hero';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Layout/Navbar';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/products/:category/:id' element={<ItemDetailContainer />} />
            <Route path="*" element={<main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main>} />
          </Routes>
          <Outlet/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

