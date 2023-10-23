import { useState } from "react";

function Hello(props) {

    const [name, setName] = useState(props.name);

    function changeName(event) {
        setName(event.target.value);
    }

    return (
        <div>

        <input type="text" value={name} onChange={changeName} />
        <h1>Hello, {name}</h1>

        </div>
    );
}

export default Hello;