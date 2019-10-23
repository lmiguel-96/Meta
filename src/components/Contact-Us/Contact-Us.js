import React, { useEffect } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";

const StyledContainer = styled(Container)`
  background-color: #f4f4f4;
  margin-left: 300px;
`;

export const ContactUs = ({ location }) => {
  const queryParams = new URLSearchParams(location.search);
  const activeService = queryParams.get("idService");

  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <StyledContainer>
        <ContactForm activeService={activeService} />
      </StyledContainer>
    </Animated>
  );
};

export default withRouter(ContactUs);
