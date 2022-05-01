import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import ItemList from './components/ItemList';
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
          <Route path='/products' element={<ItemList />} />
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

