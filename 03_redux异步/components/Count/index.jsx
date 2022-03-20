import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_actions";

export default class Count extends Component {
  //   state = { count: 0 };

  // 必须要通过这种方式进行状态的检测，一旦状态发生变化，要重新调用render
  //  因为redux 不会自动调用render
  //   而 之前使用  this.setState 是 react 自身的，那么只要调用哪个，就会自动 重新调用 render
  componentDidMount() {
    store.subscribe(() => {
      this.setState({}); // 这里是虚晃一枪，就是为了调用 render
    });
  }

  increment = () => {
    const { value } = this.selectNumber;
    // store.dispatch({ type: "increment", data: value * 1 }); // 这里用这个星号，是进行格式的转换
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    // store.dispatch({ type: "decrement", data: value * 1 }); // 这里用这个星号，是进行格式的转换
    store.dispatch(createDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      // store.dispatch({ type: "increment", data: value * 1 }); // 这里用这个星号，是进行格式的转换
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  // incrementAsync = () => {
  //   const { value } = this.selectNumber;
  //   // setTimeout(() => {
  //   //   // store.dispatch({ type: "increment", data: value * 1 }); // 这里用这个星号，是进行格式的转换
  //   //   store.dispatch(createIncrementAction(value * 1));
  //   // }, 1000);
  // };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value * 1, 1000));
  };

  render() {
    return (
      <div>
        <h1>当前求和为 {store.getState()}</h1>
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
