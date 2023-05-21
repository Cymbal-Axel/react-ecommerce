import React from 'react';
import IMG from "../../images/img01.jpg";


export const ProductoItem = ({id, title, price, image, category, cantidad}) => {
    return(
        <div className="producto">
            <a href="#">
            <div className="producto__img">
                <img src={IMG} alt=""/>
            </div>
            </a>
            <div className="producto__footer">
                <h1> Title </h1>
                <p> Categoria </p>
                <p className="price">$320</p>
            </div>
            <div className="buttom">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>  
    )
}