import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  const [btnWasClicked, setBtnWasClicked] = useState(false);
  const btnClickHandler = (e) => {
    setBtnWasClicked(true);
  };
  return (
    <div className="App">
      <section className="btn-wrapper">
        <Button onClick={btnClickHandler}>Click Me</Button>
      </section>
    </div>
  );
}

export default App;
