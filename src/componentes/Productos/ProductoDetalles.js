import React, {useContext, useState, useEffect} from 'react';
import { DataContext } from '../../context/Dataprovider';
import { useParams } from 'react-router-dom';

export const ProductoDetalles = () =>{

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const params = useParams();
    const [detalle, setDetalle] = useState([]);
    const [url, setUrl] = useState(0)
    const [images, setImages] = useState("")

    useEffect(()=>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setDetalle(producto);
                setUrl(0)
            }  
        })
    },[params.id, productos])

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`;
        setImages(values);
    },[url, params.id])
    const handleInput = e => {
        const number = e.target.value.toString().padStart(2, "01")
        setUrl(number)
        console.log(number)
    }

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
                <button>Añadir al carrito</button>
                <img src={images} alt={detalle.title}/>
                <input type="range" min="1" max="36" value={url} onChange={handleInput}/>
                <div className="description">
                    <p><b>description:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>  <br/>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
        }
        </>
    )
}