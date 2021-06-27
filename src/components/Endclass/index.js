import React, { Component } from "react";
import {
  EndclassContainer,
  Container,
  RadioButton,
  Label,
  Div,
  Circle,
  Heading,
  Button,
  SubOptions,
  Textarea,
} from "../Endclass/endclass.element";
import Checkmark from "../../assets/check_mark.svg";
import { options, sub_options } from "./data";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_option: 0,
      selected_sub_option: 0,
      show_sub_options: false,
      show_textarea: false,
    };
  }

  changeOption = (selected_option) => {
    if (selected_option === 0) {
      this.setState({
        show_sub_options: false,
        selected_option,
      });
    } else {
      this.setState({
        selected_option,
        show_sub_options: true,
      });
    }
  };

  changeSubOption = (selected_sub_option) => {
    if (selected_sub_option === 4) {
      this.setState({
        show_textarea: true,
        selected_sub_option,
      });
    } else {
      this.setState({
        show_textarea: false,
        selected_sub_option,
      });
    }
  };

  render() {
    const {
      selected_option,
      selected_sub_option,
      show_sub_options,
      show_textarea,
    } = this.state;

    const { close } = this.props;
    return (
      <EndclassContainer>
        <Container>
          <Heading>Select a reason to end the class</Heading>

          {options.map((item, index) => (
            <Div key={index}>
              <RadioButton onClick={() => this.changeOption(index)}>
                {selected_option === index && <Circle src={Checkmark} />}
              </RadioButton>
              <Label>{item.label}</Label>
            </Div>
          ))}

          <SubOptions show_sub_options={show_sub_options}>
            {sub_options.map((item, index) => (
              <Div key={index}>
                <RadioButton onClick={() => this.changeSubOption(index)}>
                  {selected_sub_option === index && <Circle src={Checkmark} />}
                </RadioButton>
                <Label>{item.label}</Label>
              </Div>
            ))}
            <Textarea
              show_textarea={show_textarea}
              placeholder="Type here..."
            />
          </SubOptions>

          <Div>
            <Button onClick={this.props.endClass} primary>End Class</Button>
            <Button onClick={close} margin="0px 0px 0px 10px">
              Cancel
            </Button>
          </Div>
        </Container>
      </EndclassContainer>
    );
  }
}
