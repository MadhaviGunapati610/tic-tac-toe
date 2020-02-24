import React from "react";
import "./styles.css";
import CounterDisplay from "./components/CounterDisplay";
import Counter from "./components/Counter";
import Square from "./components/Square";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Square />
        <Counter />
        <CounterDisplay />
      </div>
    );
  }
}

export default App;
