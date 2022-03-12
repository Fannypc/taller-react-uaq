import { useRef, useEffect } from "react";

function UseRefHook() {
  const inputRef = useRef();

  const imprimirValor = () => {
    console.log(inputRef);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={imprimirValor}>clock</button>
    </>
  );
}

export default UseRefHook;
