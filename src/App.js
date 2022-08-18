import React, { Component } from "react";
import ToggleSwitch from "./components/ToggleSwitch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToggleSwitch label="Good" />
        <ToggleSwitch label="Fast" />
        <ToggleSwitch label="Cheap" />
      </React.Fragment>
    );
  }
}
export default App;