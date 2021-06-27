import styled, { keyframes } from "styled-components";

const expand = keyframes`
  from {
    display: none;
    height: 0;
  }

  to {
    display: block;
    height:auto;
  }
`;

const expandTextarea = keyframes`
  from {
    display: none;
    height: 0;
  }

  to {
    display: block;
    height: 10vh;
  }
`;

export const EndclassContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40%;
  height: fit-content;
  padding: 5% 2%;
  background-color: ${(props)=>props.theme.dark?"#121212":"#ffffffde"};
  border:1px solid ${(props)=>props.theme.dark?"#30363d":"transparent"};
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const RadioButton = styled.div`
  background-color: #cccccc;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Circle = styled.img`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 50%;
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  color:${(props)=>props.theme.dark?"#ffffffde":"#121212 "};
`;

export const Label = styled.label`
  display: block;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color:${(props)=>props.theme.dark?"#ffffffde":"#121212"};
  margin-left: 10px;
`;

export const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#f35742" : "transparent")};
  color: ${({ primary }) => (primary ? "#ffffffde" : "#8b949e")};
  font-size: 14px;
  font-weight: 500;
  padding: 4px 10px;
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 5px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #8b949e")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const SubOptions = styled.div`
  padding-left: 20px;
  width: 100%;
  display: ${({ show_sub_options }) => (!show_sub_options ? "none" : "block")};
  animation: ${({ show_sub_options }) => (show_sub_options ? expand : null)};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const Textarea = styled.textarea`
  padding-left: 20px;
  width: 80%;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  border:1px solid ${(props)=>props.theme.dark?"#30363d":"#cccccc "};
  background-color: ${(props)=>props.theme.dark?"#121212":"#ffffff "};
  color:${(props)=>props.theme.dark?"#ffffffde":"#121212"};
  resize: none;
  outline: none;
  display: ${({ show_textarea }) => (!show_textarea ? "none" : "block")};
  animation: ${({ show_textarea }) => (show_textarea ? expandTextarea : null)};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;
