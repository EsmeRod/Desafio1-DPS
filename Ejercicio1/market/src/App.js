import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import './App.css';


const App = () => {

  function result(cantidad, precio){
    var result
  return  result = cantidad*precio
  }

  const [nombre, setNombre] = useState([       
    {nombre:'Pera', precio: '0.25'},
    {nombre:'lechuga', precio: '0.45'},
    {nombre:'manzana', precio: '0.35'},
    {nombre:'banana',precio: '0.20'},
    {nombre:'tomate', precio: '0.25'},
    {nombre:'cebolla', precio: '0.20'},
    {nombre:'pepino', precio: '0.20'},
    {nombre:'chile', precio: '0.15'},
    {nombre:'zanahoria', precio: '0.20'},
    {nombre:'fresas', precio: '0.10'},]);
  const [cant, setCant] = useState(''); 
  const [product, setProduct] = useState([]);

  const agregarProduct = e=>{
    e.preventDefault();
    setProduct([...product, {nombre}, {cant}])
  }

  return (
    <>

      <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">Cart</span>
      </nav>
      <div className='container'>
        <div className='row'>
           <div className='col-md-7 mt-3'>
                 <h4>Productos</h4>
                </div>
                <table>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Productos</th>
                          <th >Cantidad</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
              </div>
                  

export default App;
