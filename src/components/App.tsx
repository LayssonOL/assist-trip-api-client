import * as React from "react";
import { useState, useEffect} from "react";

const App = () => {
    const [name, setName] = useState("Laysson");

    useEffect(() => {
        document.getElementById("text").innerText = `Hello ${name}`;
    },[name]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    
    return (
        <div>
            <h1>My first Page</h1>
            <input  type="text"
                    name="name"
                    id="inputName"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
            <br/>
            <p id="text"></p>
        </div>
    );
}

export default App;