import React, { useContext } from "react";
import "./ImageComp.scss";
import { Carousel } from "react-responsive-carousel";
import { MetaContext } from "../context";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme, Hidden } from "@material-ui/core";
import styled from "styled-components";

const Slide = styled.div(({ imageFolder, theme }) => ({
  background: `url(${require(`../../images/${imageFolder}/Slider.jpg`)})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  [theme.breakpoints.down("xs")]: {
    height: "calc(100vh - 126px)"
  }
}));

const SlideContent = styled.div(({ theme }) => ({
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100%"
}));

const SlideTitle = styled.h5(({ theme }) => ({
  fontFamily: "'Nunito', sans-serif",
  color: "white",
  textAlign: "left",
  width: "100%",
  textTransform: "uppercase"
}));

export const ImageComp = () => {
  const { selectedSlide, updateCurrentSlide, slidesData } = useContext(
    MetaContext
  );
  const theme = useTheme();

  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={500}
      interval={10000}
      stopOnHover={false}
      swipeable={true}
      selectedItem={selectedSlide}
      onChange={updateCurrentSlide}
      dynamicHeight={true}
      className="carrousel-wrapper"
    >
      {slidesData.map(({ imageFolder, id, title }) => (
        <Slide imageFolder={imageFolder} theme={theme} key={id}>
          <Hidden smUp>
            <SlideContent theme={theme}>
              <SlideTitle>{title}</SlideTitle>
            </SlideContent>
          </Hidden>
        </Slide>
      ))}
    </Carousel>
  );
};
