import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import "./MoneyGraph.scss";

export default class MoneyGraph extends Component {
  constructor(props) {
    super(props);
    // anything in here runs right when the component is created
    // here we will put some data in the state for when this component starts
    this.state = {
      data: [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
      ]
    };
  }

  addMoney() {
    let newState = this.state;
    newState.data[3].earnings += 1000;
    this.setState(newState);
  }

  takeMoney() {
    let newState = this.state;
    newState.data[3].earnings -= 1000;
    this.setState(newState);
  }

  render() {
    return (
      // In the render return is where all of the HTML-like stuff lies, all of the visual stuff.
      <div className="card moneygraph">
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={20}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={x => `$${x / 1000}k`}
          />
          <VictoryBar data={this.state.data} x="quarter" y="earnings" />
        </VictoryChart>

        <div className="btn-group">
          <button
            onClick={this.addMoney.bind(this)}
            type="button"
            className="btn btn-success"
          >
            More Money in Q4
          </button>
          <button
            onClick={this.takeMoney.bind(this)}
            type="button"
            className="btn btn-danger"
          >
            Less Money in Q4
          </button>
        </div>
      </div>
    );
  }
}
