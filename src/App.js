import React from "react";
import icon from "./stopwatch.svg";
import "./App.css";

class App extends React.Component{
  constructor(props)
  {
    super(props);
      this.state = {
        minutes: 0,
        seconds: 0
      }
  }

  render(){
  return (
      <div className="App">
        <img src={icon} className='App-icon' alt="timer" />
        <p>
          Timer info: {this.state.minutes} : {this.state.seconds}
        </p>
      </div>
    );
  }
} 

export default App;
