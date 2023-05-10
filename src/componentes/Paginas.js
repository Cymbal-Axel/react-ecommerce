import React from "reacr";
import {Switch, Router} from 'react-router-dom';


export const paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
            </Switch>
        </section>
    )
}