import { useState } from "react";

function App() {

    const [result, setResult] = useState(0);

  function Poga() {
    setResult(result +1);
  }

  function Oga() {
    setResult(result -1);
  }

  

  return (
    <div className="App">

      <label>Ievadi savu textu: </label>
      <input type="text" />

      <button onClick={Poga}>+Poga</button> <button onClick={Oga}>-Poga</button>

      <br></br>
      <br></br>

      <h1>WOW[{result}]</h1>

    </div>
  );
}


export default App;
