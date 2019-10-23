import React from "react";
import styled from "styled-components";
import { useTheme, makeStyles, Fab, Container } from "@material-ui/core";
import { ArrowTooltip } from "../Our-Services/ArrowTooltip";
import Window from "../Contact-Us/Window/Window";
import logo from "../../images/meta-logo.png";

const MetaLogo = styled.img({
  height: "180px",
  width: "140px",
  margin: "0 auto"
});

const NewsletterForm = styled.form.attrs(props => ({
  "data-netlify": "true",
  name: "newsletter-form",
  method: "POST"
}))`
  width: 70%;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${props => props.theme.breakpoints.down("xs")} {
    margin: 0 auto;
    display: flex;
    flexdirection: column;
    alignitems: center;
  }
`;

const StyledContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledInput = styled.input({
  width: "70%",
  border: "none",
  padding: "0px 6px 0px 17px",
  color: "#1e1e1e",
  fontfamily: `"Nunito", sans-serif`,
  textTransform: "uppercase",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: "16px",
  outline: "none",
  "&:focus": {
    "&::placeholder": {
      color: "#d8d8d8"
    }
  }
});

const Title = styled.h2(({ theme }) => ({
  marginTop: "10px",
  fontFamily: `"Nunito", sans-serif`,
  color: "#1e1e1e",
  fontWeight: "900",
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem"
  }
}));

const Anchor = styled.a`
  margin: auto;
`;

const useStyles = makeStyles(theme => ({
  fab: {
    boxShadow: "none",
    justifySelf: "flex-end",
    borderRadius: "15px",
    border: "solid 4px #1e1e1e",
    width: "30%",
    height: "56px",
    backgroundColor: "white",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "bold",
    color: "#1e1e1e",
    marginRight: "5px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#1e1e1e",
      color: "white",
      fontWeight: "bold",
      border: "solid 4px #1e1e1e"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}));

const Newsletter = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Container fixed>
      <NewsletterForm theme={theme}>
        <input type="hidden" name="form-name" value="newsletter-form" />
        <StyledContainer>
          <Anchor href="https://www.onlymeta.com">
            <MetaLogo theme={theme} src={logo} />
          </Anchor>
        </StyledContainer>
        <Title theme={theme}>Newsletter</Title>
        <StyledContainer>
          <Window title="Email">
            <ArrowTooltip title="Recibe contenido, noticias, bolétines, y promociones especiales cada mes. Entérate antes que nadie sobre las últimas novedades sobre social media, diseño, marketing">
              <StyledInput type="email" required />
            </ArrowTooltip>
          </Window>
          <Fab
            className={classes.fab}
            variant="extended"
            size="large"
            aria-label="add"
            type="submit"
          >
            Subscribirse
          </Fab>
        </StyledContainer>
      </NewsletterForm>
    </Container>
  );
};

export default Newsletter;
