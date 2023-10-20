import { useState } from "react";

function Counter() { 

   const [result, setResult] = useState(0);
   const [ratioChange, setRatioChange] = useState(1);

 function Plus() {
   setResult(result + parseInt(ratioChange));
 }

 function Minus() {
   setResult(result - ratioChange);
 }

 function Reiz() {
   setResult(result * ratioChange);
 }

 function Dalits() {
   setResult(result / ratioChange);
 }

 function handleRatioChange(event) {
   setRatioChange(event.target.value);
 }

return (
   <div className="App">

     <label>Ievadi savu skaitli: </label>
     <input type="number" value={ratioChange} onChange={handleRatioChange} />

     <button onClick={Plus}>Plus</button>
     <button onClick={Minus}>Minus</button>
     <button onClick={Reiz}>Reiz</button>
     <button onClick={Dalits}>Dalits</button>

     <br></br>
     <br></br>

     <h1>WOW[{result}]</h1>

   </div>
    );
}

export default Counter;