import './App.css';
import Hero from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ItemListContainer name='Coder' />
    </div>
  );
}

export default App;

