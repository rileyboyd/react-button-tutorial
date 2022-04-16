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
        <h3>Button was {btnWasClicked ? "clicked" : "not clicked"}</h3>
        <Button onClick={btnClickHandler} disabled={btnWasClicked}>
          Click Me
        </Button>
      </section>
    </div>
  );
}

export default App;
