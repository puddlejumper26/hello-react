import React, { Component } from "react";
import Detail from "./Detail";
import { NavLink, Routes, Link, Route } from "react-router-dom";
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "Message 1" },
      { id: "02", title: "Message 2" },
      { id: "03", title: "Message 3" },
    ],
  };
  render() {
    console.log("Message called");
    const { messageArr } = this.state;

    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to="/home/message/detail">{msgObj.title}</Link>
              </li>
            );
          })}
        </ul>

        <Routes>
          <Route path="/home/message/detail" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}
