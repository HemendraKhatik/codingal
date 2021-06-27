import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 15px;
  background-color: ${(props) => (props.theme.dark ? "#ffffffde" : "#121212")};
  margin: 4px 0px;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Burger = styled.div`
  width: 32px;
  height: fit-content;
`;
