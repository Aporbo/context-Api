import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';


 export  const categoryContext = createContext();

function App() {
  const [count, setCount]=useState('laptop');
  return (
  <categoryContext.Provider value={[count,setCount]}>
      <h5>this is app:{count}</h5>
      <Header></Header>
     <Home ></Home>
     <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
