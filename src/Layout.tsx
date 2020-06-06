import * as React from "react";
import {useState} from "react";


export const Layout = () => {
    const [displayed, setDisplayed] = useState(false);
    return (
        <div>
            <h1>Layout</h1>
            <button onClick={() => setDisplayed(true)}>display something</button>
            {displayed && <h1>Displayed</h1>}
            <hr />
        </div>
    )
};
