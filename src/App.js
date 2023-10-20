import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const allNames = ["Marsels", "Railijs", "Matiss"];

  const allNamesjsx = Names.map(name => {
    return (
      <Hello displayName={name} />
    );
  })

  return (
    <>
    <Counter />
    <Hello />
    {allNamesjsx}
    </>
  );
}

export default App;