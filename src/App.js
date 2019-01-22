// In all react components you will need to import this
import React, { Component } from "react";
// Import our MoneyGraph component from the Components folder so we can use it here
import MoneyGraph from "./Components/MoneyGraph";

class App extends Component {
  render() {
    return (
      // This is the outline of the whole site
      <div>
        {/* Navbar for the top thats blue and just says Chart Starter */}
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Chart Starter
          </a>
        </nav>
        {/* Use bootstrap to center the graph in a div */}
        <div class="col-xs-1" align="center">
          {/* Our MoneyGraph Component from the Components folder */}
          <MoneyGraph />
        </div>
      </div>
    );
  }
}

export default App;
