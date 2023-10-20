import { useState } from "react";

function Hello(props) {

    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <>
        <input type="text" value={name} onChange={handleNameChange} />
        <h1>Hello, {name}</h1>
        </>
    );
}

export default Hello;