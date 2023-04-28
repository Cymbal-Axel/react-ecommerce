import React from "react";
import Nike from "../../images/Nike.jpg";

export const Header = () => {
    return (
        <div>
            <header>
                <a href="#">
                    <div className="logo">
                        <img src={Nike} alt=""/>
                    </div>
                </a>
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>

                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                </ul>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                </div>
            </header>
        </div>
    )
}