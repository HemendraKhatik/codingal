import React, { Component } from "react";
import {
  SideMenu,
  SideMenuContainer,
  CloseSideMenu,
  SideTimer,
  SideEndClassButton,
} from "./navbar.elements";

export default class sidebar extends Component {
  render() {
    const { toggle, endClass } = this.props;
    return (
      <SideMenuContainer>
        <SideMenu>
          <CloseSideMenu onClick={toggle}>Close</CloseSideMenu>
          <SideTimer>33:40</SideTimer>
          <SideEndClassButton onClick={endClass}>End Class</SideEndClassButton>
        </SideMenu>
      </SideMenuContainer>
    );
  }
}
