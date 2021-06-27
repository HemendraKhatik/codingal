import React, { Component } from "react";
import {
  SideMenu,
  SideMenuContainer,
  CloseSideMenu,
  SideTimer,
  SideEndClassButton,
  SideBarTitle,
} from "./navbar.elements";

export default class sidebar extends Component {
  render() {
    const { toggle, endClassPopup, minutes, sec, end_class, startClass } =
      this.props;
    return (
      <SideMenuContainer>
        <SideMenu>
          <CloseSideMenu onClick={toggle}>Close</CloseSideMenu>
          {end_class ? (
            <SideTimer>00:00</SideTimer>
          ) : (
            <SideTimer>
              {minutes}:{sec}
            </SideTimer>
          )}

          <SideBarTitle>Trial lesson [Grade 1-3]</SideBarTitle>

          {end_class ? (
            <SideEndClassButton onClick={startClass}>
              Start Class
            </SideEndClassButton>
          ) : (
            <SideEndClassButton onClick={endClassPopup}>
              End Class
            </SideEndClassButton>
          )}
        </SideMenu>
      </SideMenuContainer>
    );
  }
}
