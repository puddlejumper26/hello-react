// import haha from "../../components/Count";

import { connect } from "react-redux";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count_actions";

import React, { Component } from "react";

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 1000);
  };

  render() {
    return (
      <div>
        <h1>当前求和为 {this.props.count}</h1>
        <h2>下方总人数为{this.props.renshu}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state.he, renshu: state.rens.length }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
