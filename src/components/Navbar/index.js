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
      end_class_popup: false,
      timer: true,
      sideMenu: false,
      minutes: 9,
      sec: 0,
      end_class: false,
    };
  }

  sideMenuToggler = () => {
    this.setState({ sideMenu: !this.state.sideMenu });
  };

  endClassPopup = () => {
    this.setState({ end_class_popup: !this.state.end_class_popup });
  };

  countDown = () => {
    let { sec, minutes } = this.state;
    if (minutes === 0 && sec === 1) {
      this.setState({
        sec: 60,
        minutes: 9,
        end_class: true,
      });
      clearInterval(this.interval);
      return;
    }
    if (sec === 1) {
      this.setState({
        sec: 60,
        minutes: minutes - 1,
      });
    } else {
      this.setState({
        sec: sec - 1,
      });
    }
  };

  startTimer = () => {
    this.interval = setInterval(() => this.countDown(), 1000);
  };

  resetClass = () => {
    this.setState({ sec: 60, minutes: 9, end_class: true });
    this.endClassPopup();
  };

  startClass = () => {
    this.setState({ sec: 60, minutes: 9, end_class: false });
    this.startTimer();
  };

  componentDidMount() {
    this.setState({ sec: 60 });
    this.startTimer();
  }

  render() {
    const { end_class_popup, sideMenu, minutes, sec, end_class } = this.state;
    return (
      <Nav>
        <Left>
          <Logo src={LogoIcon} alt="Logo" />
          <Title>Trial lesson [Grade 1-3]</Title>
          {/* Will appear on mobile screen only */}
          <LogoTitle>Condingal</LogoTitle>
        </Left>
        <Right>
          <Div display="true">
            {end_class ? (
              <Timer>00:00</Timer>
            ) : (
              <Timer>
                {minutes}:{sec}
              </Timer>
            )}
            {end_class ? (
              <Button onClick={this.startClass}>Start Class</Button>
            ) : (
              <Button onClick={this.endClassPopup}>End Class</Button>
            )}
          </Div>
          {/* Will appear on mobile screen only */}
          <HamburgerIcon toggler={this.sideMenuToggler} />
        </Right>

        {sideMenu && (
          <Sidebar
            end_class={end_class}
            minutes={minutes}
            sec={sec}
            endClassPopup={this.endClassPopup}
            toggle={this.sideMenuToggler}
            startClass={this.startClass}
          />
        )}

        {end_class_popup && (
          <EndClass endClass={this.resetClass} close={this.endClassPopup} />
        )}
      </Nav>
    );
  }
}
