import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import Cubes from "../Cubes/Cubes";
import { routesNav } from "./routesNav";
import { routes, newsletter } from "./routes";
import { MetaProvider } from "../context";
import { makeStyles, Hidden } from "@material-ui/core";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import styled from "styled-components";

const Sidebar = styled.aside`
  position: fixed;
  width: 30%;
  top: 0;
  left: 0;
  bottom: 0;
  display: block;
  height: 100vh;
  overflow: hidden;
`;

const SidebarFooter = styled.section`
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  color: #1e1e1e;
  font-weight: bold;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  &:hover {
    color: whitesmoke !important;
    font-weight: bold;
    text-decoration: none;
    font-weight: 900;
  }
  &:active {
    color: whitesmoke;
    font-weight: 900;
    text-decoration: none;
  }
`;

const Navbar = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 9% 0 0 40%;
`;

const NavItem = styled.li`
  text-decoration: none;
  list-style: none;
`;
const useStyles = makeStyles(theme => ({
  active: {
    color: "whitesmoke"
  },
  contentWrapperApp: {
    marginLeft: "30%",
    display: "block",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      paddingTop: "126px",
      margin: "0",
      boxShadow: "none"
    }
  },
  contentWrapperNewsletter: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
    overflow: "auto",
    padding: "20px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      paddingTop: "126px",
      margin: "0",
      boxShadow: "none"
    }
  },
  navbar: {
    [theme.breakpoints.between("sm", "md")]: {
      padding: "120% 0 0 25%"
    }
  }
}));

const AppRouter = props => {
  const { location } = props;
  const classes = useStyles();

  const Home = (
    <MetaProvider>
      <Router>
        <Hidden smUp>
          <MobileNavbar />
        </Hidden>
        <Hidden xsDown>
          <Sidebar>
            <Cubes />
            <Navbar className={classes.navbar}>
              <NavItem>
                <StyledNavLink activeClassName={classes.active} to="/home">
                  Home
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink activeClassName={classes.active} to="/about">
                  Nosotros
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink activeClassName={classes.active} to="/services/">
                  Servicios
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  activeClassName={classes.active}
                  to="/our-works/"
                >
                  Portafolio
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink activeClassName={classes.active} to="/contact/">
                  Contacto
                </StyledNavLink>
              </NavItem>
            </Navbar>
            <SidebarFooter>
              {routesNav.map(({ path, component, exact }, i) => (
                <Route
                  exact={exact}
                  path={path}
                  component={component}
                  key={i}
                />
              ))}
            </SidebarFooter>
          </Sidebar>
        </Hidden>
        <section className={classes.contentWrapperApp}>
          <Switch>
            {routes.map(({ path, component, exact }, i) => (
              <Route exact={exact} path={path} component={component} key={i} />
            ))}
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </section>
      </Router>
    </MetaProvider>
  );

  const Newsletter = (
    <Router>
      <section className={classes.contentWrapperNewsletter}>
        <Route
          exact={newsletter.exact}
          path={newsletter.path}
          component={newsletter.component}
        />
      </section>
    </Router>
  );

  return location.pathname === "/newsletter" ? Newsletter : Home;
};

export default withRouter(AppRouter);
