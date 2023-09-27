import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  componentDidMount() {
    // console.log("component did mount");
  }
  componentDidUpdate() {
    // console.log("component did update");
  }
  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter()}>click Text</button>
        <p>Text : {this.state.counter}</p>
      </div>
    );
  }
}
