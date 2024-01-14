import React, { Component } from 'react';
// import './App.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
      highlight: false,
    };
  }

  plus = () => {
    this.setState({
      counts: this.state.counts + 1,
      highlight: true,
    });

    // Reset the highlight after a short delay
    setTimeout(() => {
      this.setState({ highlight: false });
    }, 500);
  };

  minus = () => {
    this.setState({
      counts: this.state.counts - 1,
      highlight: true,
    });

    // Reset the highlight after a short delay
    setTimeout(() => {
      this.setState({ highlight: false });
    }, 500);
  };

  reset = () => {
    this.setState({
      counts: 0,
      highlight: true,
    });

    // Reset the highlight after a short delay
    setTimeout(() => {
      this.setState({ highlight: false });
    }, 500);
  };

  render() {
    return (
      <>
        <h1>Kalvi Counter by Ananya</h1>
        <div
          id='show'
          style={{
            background: this.state.highlight ? 'yellow' : 'none',
            transition: 'background-color 0.5s ease'
          }}
        >
          {this.state.counts}
        </div>
        <div>
          <button onClick={this.plus}>+</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.minus}>-</button>
        </div>
      </>
    );
  }
}
