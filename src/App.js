
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Component/Products';
import Recipe from './Component/Recipe';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Country from './Component/Country';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/"element={<Home/>}/>
        <Route path="/product"element={<Products/>}/>
        <Route path="/recipe"element={<Recipe/>}/>
        <Route path="/country"element={<Country/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
