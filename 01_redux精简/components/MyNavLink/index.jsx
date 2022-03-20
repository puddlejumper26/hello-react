import React, { Component } from "react";
import { NavLink, Routes, Link, Route } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <NavLink className="default" to="/about">
          About
        </NavLink> */}
        <NavLink {...this.props}>{this.props.children}</NavLink>
      </div>
    );
  }
}
