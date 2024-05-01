import React from "react"
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  constructor () {
    super();

    this.state = { showCounter: false }
  }
  render () {
    return(
      <div>
        <h1>ciclo de vida no react </h1>
        <button onClick={() => this.setState({ showCounter : !this.state.showCounter})}
        >
          {this.state.showCounter ? "Remover contador" : "Mostrar contador"}
        </button>


        {this.state.showCounter ? <Counter /> : null}
      </div>
      
    );
  }
  
}

export default App;
