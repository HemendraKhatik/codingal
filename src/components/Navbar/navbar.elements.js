import styled, { keyframes } from "styled-components";

const expand = keyframes`
from{
  width: 0px;
}
to{
  width: 50%;
}
`;

export const Div = styled.div`
  width: 100%;
  height: fit-content;
  display: ${({ display }) => (display ? "flex" : "none")};
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
`;

export const Left = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Right = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
    cursor: pointer;
    padding-right: 10px;
  }
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  background-color: #f35742;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 18px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
  flex: 1;
  border-left: 2px solid #cccccc;
  padding-left: 5%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoTitle = styled.p`
  display: none;
  font-size: 18px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
  flex: 1;
  border-left: 2px solid #cccccc;
  padding-left: 5%;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Timer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #cccccc;
  flex: 1;
  height: 100%;
  text-align: right;
  padding-right: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  height: fit-content;
  background-color: #f35742;
  color: #ffffffde;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-self: right;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;

export const SideMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SideMenu = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${(props)=>!props.theme.dark?"#ffffff":"#121212"};
  padding-right: 10px;
  animation: ${expand};
  animation-duration: 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
`;

export const CloseSideMenu = styled.div`
  width: fit-content;
  height: fit-content;
  color: ${(props)=>props.theme.dark?"#ffffffde":"#121212"};
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SideTimer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  border: 1px solid ${(props)=>props.theme.dark?"#ffffffde":"#121212"};
  color:${(props)=>props.theme.dark?"#ffffffde":"#121212"};
  justify-content: center;
  align-items: center;
`;

export const SideEndClassButton = styled.div`
  padding: 10px;
  width: 80%;
  height: fit-content;
  background-color: #f35742;
  color: #ffffffde;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;
