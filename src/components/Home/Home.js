import React, { useContext } from "react";
import "./Home.scss";
import { Animated } from "react-animated-css";
import { MetaContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#1e1e1e",
    "&:hover": {
      backgroundColor: "gray",
      textDecoration: "none"
    }
  },
  input: {
    display: "none"
  }
}));
export const Home = () => {
  const { selectedSlide, slidesData, isVisible } = useContext(MetaContext);
  // console.log(slidesData);

  return (
    <div>
      <NavbarSectionComponent
        title={slidesData[selectedSlide].title}
        description={slidesData[selectedSlide].description}
        isVisible={isVisible}
        linkTo={slidesData[selectedSlide].imageFolder}
        idService={slidesData[selectedSlide].idService}
      />
    </div>
  );
};

const NavbarSectionComponent = ({
  title,
  description,
  isVisible,
  linkTo,
  idService
}) => {
  const classStyle = useStyles();
  return (
    <React.Fragment>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={isVisible}
      >
        <div className="Home-Layout text-right">
          <div className="justify-content-end Home-Title ml-auto">
            {title.toUpperCase()}
          </div>
          <p className="Home-Description">
            {description}
            <Link to={`../our-works/${linkTo}`}> Ver Más...</Link>
          </p>
        </div>
      </Animated>
      <div className="justify-content-end ml-auto d-flex pr-3">
        <div className="Contact-Text">{`Si te gustó ${title}...`}</div>
        <Link
          to={{ pathname: "/contact", search: `?idService=${idService}` }}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            className={classStyle.button}
            color="secondary"
          >
            Contáctanos
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};
