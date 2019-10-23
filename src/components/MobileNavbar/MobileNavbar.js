import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/meta-logo.png";

const Toolbar = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LogoImage = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 50px;
  position: relative;
`;


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "126px",
    maxHeight: "126px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    backgroundColor: "#f9f9f9",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
  },
  logo: {
    height: "65px",
    width: "50px"
  }
}));

export const MobileNavbar = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Toolbar>
        <LogoImage>
          <Link to={"/home/"}>
            <img className={classes.logo} src={logo} />
          </Link>
        </LogoImage>
        <MenuBox>
          <Menu absolute />
        </MenuBox>
      </Toolbar>
    </header>
  );
};
