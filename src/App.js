import { useState } from "react";

function App() {

    const [result, setResult] = useState(0);
    const [ratioChange, setRatioChange] = useState(1);

  function Poga() {
    setResult(result + ratioChange);
  }

  function Oga() {
    setResult(result - ratioChange);
  }

  function handleRatioChange(event) {
    setRatioChange(event.target.value);
  }

  return (
    <div className="App">

      <label>Ievadi savu textu: </label>
      <input type="number" value={ratioChange} onChange={handleRatioChange} />

      <button onClick={Poga}>+Poga</button>
      <button onClick={Oga}>-Poga</button>

      <br></br>
      <br></br>

      <h1>WOW[{result}]</h1>

    </div>
  );
}


export default App;
