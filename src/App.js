import React from 'react';
import { Header } from './componentes/Header';
import 'boxicons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Paginas } from './componentes/Paginas';
import { DataProvider } from './context/Dataprovider';
import { Carrito } from './componentes/Carrito/index';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Carrito />
        <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
