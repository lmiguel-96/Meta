import React from "react";
import styled from "styled-components";
import { ArrowTooltip } from "../../Our-Services/ArrowTooltip";

const StyledCheckboxInput = styled.input.attrs({
  type: "checkbox"
})`
  width: 0;
  height: 1 0;
`;

const StyledLabelInput = styled.label`
  cursor: pointer;
  position: absolute;
  top: 24px;
  bottom: 0;
  right: 0;
  left: 0;
`;

const minHeight = 24;

const ServiceBox = styled.div(props => ({
  width: "13%",
  border:
    props.active && props.backgroundActive
      ? `4px solid ${props.backgroundActive}`
      : "4px solid #221f1f",
  borderRadius: "15px",
  backgroundColor: "white",
  position: "relative",
  zIndex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyConten: "space-between",
  marginLeft: "2px",
  marginRight: "2px",
  marginBottom: "10px",
  transition: "all 0.2s ease",
  "@media screen and (max-width: 960px)": {
    width: "32%"
  },
  "@media screen and (max-width: 700px)": {
    width: "48%"
  }
}));

const ServiceHeader = styled.div(props => ({
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
  transition: "all 0.2s ease"
}));

const ServiceTitle = styled.span`
  width: 100%;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: white;
  backgroun-color: #221f1f;
  align-self: flex-end;
  padding-right: 5px;
  font-size: 10px;
  text-align: right;
`;

const StyledImage = styled.img(props => ({
  height: "auto",
  width: "80px",
  margin: "80px",
  margin: "auto",
  filter: props.blackAndWhite ? "grayscale(100%)" : "grayscale(0%)",
  transition: "all 0.5s ease"
}));

const ServiceItem = props => {
  const {
    name,
    id,
    value,
    title,
    active,
    color,
    image,
    description,
    click
  } = props;

  return (
    <ArrowTooltip
      disableFocusListener
      disableTouchListener
      placement="bottom"
      enterDelay={500}
      leaveDelay={200}
      title={description}
      key={id}
    >
      <ServiceBox active={active} backgroundActive={color}>
        <ServiceHeader active={active} backgroundActive={color}>
          <ServiceTitle>{title}</ServiceTitle>
        </ServiceHeader>
        <StyledImage src={image} alt={title} blackAndWhite={!active} />
        <StyledLabelInput htmlFor={id} onClick={click} />
        <StyledCheckboxInput
          name={name}
          id={id}
          value="Yes"
          defaultChecked={active}
        />
      </ServiceBox>
    </ArrowTooltip>
  );
};

export default ServiceItem;
