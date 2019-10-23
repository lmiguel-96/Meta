import React from "react";
import styled from "styled-components";

const minHeight = 24;

const WindowBox = styled.div(props => ({
  border:
    props.active && props.backgroundActive
      ? `4px solid ${props.backgroundActive}`
      : "4px solid #221f1f",
  borderRadius: "15px",
  backgroundColor: "white",
  position: "relative",
  zIndex: "1",
  width: "100%",
  marginBottom: "10px",
  marginRight: "5px",
  flex: "1"
}));

export const WindowHeader = styled.div(props => ({
  backgroundColor:
    props.active && props.backgroundActive
      ? `${props.backgroundActive}`
      : "#221f1f",
  width: "100%",
  height: `${minHeight}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: `"Nunito", sans-sareif`,
  borderBottom: "1px solid #1e1e1e"
}));

const WindowItem = styled.div`
  width: 100%;
  line-height: 1;
  text-align: right;
  background-color: #221f1f;
  color: white;
  font-family: "Nunito", sans-serif;
  user-select: none;
`;

const WindowTitle = styled.span`
  width: 100%;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  background-color: #221f1f;
  align-self: flex-end;
  padding-right: 5px;
  font-size: 10px;
`;

const Window = props => {
  const { children, title, active, backgroundActive } = props;

  return (
    <WindowBox active={active} backgroundActive={backgroundActive}>
      <WindowHeader active={active} backgroundActive={backgroundActive}>
        <WindowItem>
          <WindowTitle>{title}</WindowTitle>
        </WindowItem>
      </WindowHeader>
      {children}
    </WindowBox>
  );
};

export default Window;
