import React, { Component } from "react";
import { Line, Burger } from "./hamburger.elements";

export default class index extends Component {
  render() {
    const { toggler } = this.props;
    return (
      <Burger onClick={toggler}>
        <Line />
        <Line />
        <Line />
      </Burger>
    );
  }
}
