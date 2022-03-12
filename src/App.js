import { useState } from "react";
import CustomHook from "./components/CustomHook";
import Pokemon from "./components/Pokemon";
import Hi, { Test as Meh } from "./components/test";
import Counter from "./components/testHook";
import TestUseCallback from "./components/TestUseCallback";
import TestUseRef from "./components/TestUseRef";

function App() {
  const [list, setList] = useState(["manzana", "sandia"]);

  const change = () => {
    let temp = [...list];
    temp.push("nuevo");
    return temp;
  };

  return (
    <>
      <div className="red">Desde App</div>
      <Pokemon pokemon={{ name: "pikachu", power: 0 }} />
      <Hi />
      <Meh />
      <Counter />
      <TestUseCallback userId={1} />
      <TestUseRef />
      <CustomHook />
    </>
  );
}

export default App;
