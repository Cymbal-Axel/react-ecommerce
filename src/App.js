import React from 'react';
import {Header} from './componentes/Header';
import 'boxicons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paginas from './componentes/Paginas';

function App() {
  return (
    <div className="App">
      <Route>
        <Header />

        <Paginas />
      </Route>
    </div>
  );
}

export default App;
