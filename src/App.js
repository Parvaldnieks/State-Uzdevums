import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";

function App() {
  const allNames = ["Marsels", "Railijs", "Matiss"];

  const allNamesjsx = allNames.map((name, index) => {
    return (
      <Hello key={index} name={name} />
    );
  })

  return (
    <>
    <Counter />
    {allNamesjsx}
    </>
  );
}

export default App;