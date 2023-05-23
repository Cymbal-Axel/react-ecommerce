import React from 'react';
import  Card from '../../images/img08.jpg';

export const Carrito = () =>{
    return(
        <div className='carritos'>
            <div className='carrito'>
                <div className='carrito__close'>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className='carrito__center'>
                    <div className='carrito__item'>
                        <img src={Card} alt=''/>
                        <div>
                            <h2>title</h2>
                            <p className='price'>$345</p>
                        </div>
                        <div>
                            <box-icon name='up-arrow' type='solid'></box-icon>
                            <p className='cantidad'>1</p>
                            <box-icon name='down-arrow' type='solid'></box-icon>
                        </div>
                        <div className='remove__item'>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                </div>
                <div className='carrito__footer'>
                    <h3>Total: $2334</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}