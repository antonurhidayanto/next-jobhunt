import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Text from "./components/Text";
import Heading from "./components/Heading";
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("effect");
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        <strong>Click me!</strong>
      </button>
      <p>Counter P1 : {count}</p>
      <button onClick={() => setCount2(count2 + 1)}>
        <strong>Click me 2!</strong>
      </button>
      <p>Counter P2 : {count2}</p>
      <Text></Text>
      <Heading />
    </>
  );
}

export default App;
