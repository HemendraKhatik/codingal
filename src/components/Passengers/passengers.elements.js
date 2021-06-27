import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: fit-content;
  display: ${({ display }) => (display ? "flex" : "block")};
  align-items: center;
`;

export const PassengersContainer = styled.div`
  width: 40%;
  min-height: 100vh;
  margin: 0px auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const PassengerCard = styled.div`
  width: 100%;
  background-color: ${(props) => (props.theme.dark ? "#0d1117" : "#ffffffde")};
  margin: 0px auto;
  height: content-fit;
  border: 1px solid ${(props) => (props.theme.dark ? "#30363d" : "#cccccc")};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px;
  cursor: pointer;
`;

export const AirlineName = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;

export const AirlineCountry = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;

export const AirlineLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: 10px;
  border-radius: 5px;
`;

export const PassengerName = styled.p`
  display: inline;
  font-size: 16px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;

export const EndMessage = styled.p`
  font-size: 16px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;

export const Headquater = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;
