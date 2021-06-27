import styled from "styled-components";

export const PostPageContainer = styled.div`
  width: 35%;
  margin: 0px auto;
  height: content-fit;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  background-color: ${(props) => (props.theme.dark ? "#0d1117" : "#ffffffde")};
  margin: 0px auto;
  height: content-fit;
  border: 1px solid ${(props) => (props.theme.dark ? "#30363d" : "#cccccc")};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px;
`;

export const PostTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.theme.dark ? "#ffffffde" : "#0d1117")};
`;

export const PostBody = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #8b949e;
`;

export const ReadMore = styled.button`
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