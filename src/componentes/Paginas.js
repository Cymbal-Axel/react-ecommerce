import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import { Inicio } from './Inicio';
import { ProductosLista } from './Productos/index.js';

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route exact path="/productos"  element={<ProductosLista />} />
            </Routes>
        </section>
    )
}