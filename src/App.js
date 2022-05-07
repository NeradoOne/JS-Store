import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
// import ItemListContainer from './components/ItemListContainer';
import MeliApi from './components/MeliApi';
// import RMapi from './components/RMapi';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/pokemon' element={<MeliApi/>} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          {/* <Hero />
          <ItemListContainer name='Coder' />
          <MeliApi /> */}
          {/* <RMapi /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

