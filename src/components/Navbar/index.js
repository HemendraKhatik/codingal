import React, { Component } from "react";
import {
  Nav,
  Left,
  Right,
  Title,
  Timer,
  Logo,
  Button,
  LogoTitle,
  Div,
} from "./navbar.elements";
import LogoIcon from "../../assets/logo.png";
import HamburgerIcon from "../Hamburger";
import EndClass from "../Endclass/index";
import Sidebar from "./sidebar";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      end_class: false,
      timer: true,
      sideMenu: false,
    };
  }

  sideMenuToggler = () => {
    this.setState({ sideMenu: !this.state.sideMenu });
  };

  endClass = () => {
    this.setState({ end_class: !this.state.end_class });
  };

  render() {
    const { end_class, sideMenu } = this.state;
    return (
      <Nav>
        <Left>
          <Logo src={LogoIcon} alt="Logo" />
          <Title>Trial lesson [Grade 1-3]</Title>
          {/* Will appear on mobile screen only */}
          <LogoTitle>Condingal</LogoTitle>
        </Left>
        <Right>
          <Div display={true}>
            <Timer>33:40</Timer>
            <Button onClick={this.endClass}>End Class</Button>
          </Div>
          {/* Will appear on mobile screen only */}
          <HamburgerIcon toggler={this.sideMenuToggler} />
        </Right>

        {sideMenu && (
          <Sidebar endClass={this.endClass} toggle={this.sideMenuToggler} />
        )}

        {end_class && <EndClass close={this.endClass} />}
      </Nav>
    );
  }
}
