import React, {useContext, useState, useEffect} from 'react';
import { DataContext } from '../../context/Dataprovider';
import { useParams } from 'react-router-dom';

export const ProductoDetalles = () =>{

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const params = useParams();
    const [detalle, setDetalle] = useState([]);

    useEffect(()=>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setDetalle(producto);
            }  
        })
    },[params.id, productos])
console.log(detalle)
    return (
        <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">${detalle.price}</p>
                <div className='grid'>
                    <p className="nuevo">Nuevo</p>
                    <div className="size">
                        <select placeholder="tamaño">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                            <option value="1">8</option>
                            <option value="1">9</option>
                        </select>
                        <p>Tamaño</p>
                    </div>
                </div>
            </div>
        }
        </>
    )
}