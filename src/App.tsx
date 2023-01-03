import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <Container>
      <h1>counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid #808080;
  margin: auto;
  margin-top: 100px;
`;
