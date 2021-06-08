import Info from "./Info";
import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
      <Counter />
    </div>
  );
};

export default App;
