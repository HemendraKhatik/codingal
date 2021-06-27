import styled from "styled-components";

export const ChangeThemeBar = styled.div`
  width: 100%;
  height: 4vh;
  text-align: right;
  padding: 4px;
  background-color: ${(props) => (props.theme.dark ? "#121212" : "#ffffff")};
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#121212")};
  cursor: pointer;
`;

export const Bold = styled.p`
  display: inline;
  font-weight: 600;
`;

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props)=>props.theme.dark?"#121212":"#ffffffde"};
`;
