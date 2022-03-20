import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message/index";
import News from "./News";
import About from "../About";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {/* 导航区 */}
        <MyNavLink to="./message">Message</MyNavLink>
        <Link to="/home/news">News</Link>
        <Link to="../about">About</Link>
        {/* 展示区 */}
        <Routes>
          <Route exact path="./message" element={<Message />} />
          <Route path="./home/news" element={<News />} />
          <Route path="../About" element={<About />} />
        </Routes>
      </div>
    );
  }
}
