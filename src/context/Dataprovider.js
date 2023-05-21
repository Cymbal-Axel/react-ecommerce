import React, {useState, createContext, useEffect} from "react";
import Data from '../Data';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const producto = Data
        setProductos(producto);
    },[])

    const value = {
        producto : [productos]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}