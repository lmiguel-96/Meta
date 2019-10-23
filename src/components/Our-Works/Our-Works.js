import React, { useState } from "react";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Animated } from "react-animated-css";

const ImageOverlay = styled.div`
  white-space: pre-line;
  overflow: hidden;
  text-overflow: clip;
  padding: 20px;
  position: absolute;
  text-transform: uppercase;
  width: 1px;
  height: 100%;
  top: 0;
  background-color: #221f1f;
  z-index: 10;
  color: #221f1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.2s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
    height: 100%;
    width: 85%;
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  color: #221f1f;
  &:hover + ${ImageOverlay} {
    opacity: 1;
    height: 100%;
    width: 85%;
    color: white;
  }
`;

const ProjectTitle = styled.span`
  font-size: 2vw;
  font-weight: 800;
  text-align: left;
  line-height: 1.1em;
  text-overflow: clip;
  margin-bottom: 0;
  width: 100%;
`;

const ProjectClient = styled.span`
  font-size: 1.5vw;
  font-weight: 700;
  text-align: left;
  white-space: pre;
  overflow: hidden;
  text-overflow: clip;
  width: 100%;
`;

const ProjectDescription = styled.p`
  font-size: 1vw;
  font-weight: 400;
  text-align: left;
  width: 100%;
  overflow: hidden;
  max-height: 9em;
  margin-bottom: 0;
  margin-right: -1em;
  padding-right: 1em;
  position: relative;
  &:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: #221f1f;
  }
`;

const Project = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LookButton = styled.span`
  font-size: 1.5vw;
  text-decoration: none;
  color: #ee8573 !important;
  text-transform: uppercase;
  display: inline-block;
  text-align: right;
  width: 100%;
  align-self: flex-end;
  &:hover {
    text-decoration: none;
  }
`;

export const OurWorks = () => {
  const theme = useTheme();
  const matchMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const [projects, setProjects] = useState([
    {
      image: require("../../images/tres-puntos-packaging/Thumbnail.jpg"),
      title: "Packaging",
      subtitle: "Tres Puntos",
      description:
        "Time for snacks! Pero ¿qué pasa si la marca no quiere perder su estetica recien hecha?. Es necesario entender la importacia del Packaging en el mercado. Este es el primer contacto directo con el cliente antes de la toma de decisiones definitiva: ¿Comprar o no comprar?.",
      link: "/our-works/tres-puntos-packaging"
    },
    {
      image: require("../../images/tres-puntos-social/Thumbnail.jpg"),
      title: "Social Media Management",
      subtitle: "Tres Puntos",
      description:
        "La presencia digital es, hoy día, la más importante en todo negocio que busque trascender en alcance y aumentar ventas optimizando la presentación de su producto. Tres Puntos llegó a nosotros con la inquietud de ser capaces de mostrar a sus seguidores, no solo el producto, sino toda una personalidad detrás de la marca; Haciendose al momento más relacionable y cercana a ellos.",
      link: "/our-works/tres-puntos-social"
    },
    {
      image: require("../../images/tres-puntos-poster/Thumbnail.jpg"),
      title: "Posters",
      subtitle: "Tres Puntos",
      description:
        "Let’s Poster it! Los buenos momentos siempre merecen ser inmortalizados, pero… ¿Qué pasa con los “momentos” de una marca?",
      link: "/our-works/tres-puntos-posters"
    },
    {
      image: require("../../images/red-rocket/Thumbnail.jpg"),
      title: "Menú",
      subtitle: "Red Rocket",
      description:
        "Una gran cantidad de opciones planeadas en un espacio muy reducido, fue el reto mayor cuando era bien sabido que un menú de una pieza era requerido como carta para RedRocket. La idea era presentar este numero de platos al público nuevo sin necesidad entregarles mas de una pieza, así podrían ojear a primeros vistazos todas las secciones.",
      link: "/our-works/red-rocket"
    },
    {
      image: require("../../images/oromo/Thumbnail.jpg"),
      title: "Coffee Bags",
      subtitle: "Oromo",
      description:
        "Un buen empaque y un buen café tienen algo en común: Ambos son conciliadores de culturas. Oromo, reconocidos en poco tiempo por sus exoticos pero amigables blends de café. En un mercado como el Latinoamericano, una de las cosas más importantes es dejar bien en claro las virtudes y beneficio que un producto tiene por sobre los demás.",
      link: "/our-works/oromo"
    },
    {
      image: require("../../images/oink/Thumbnail.jpg"),
      title: "Menú",
      subtitle: "Oink",
      description:
        "El reciente proyecto de Rebrand para la marca del restuarant de PulledPork Oink, incluía tambien, como es de esperarse, el rediseño de su menú. Su marca necesitaba consolidar y justificar un concepto de caricaturas retro y además llevar al lector a que lo explorara todo en busca de hacer rotar platos que por lo general las personas omitían.",
      link: "/our-works/oink"
    },
    {
      image: require("../../images/monotematicos/Thumbnail.jpg"),
      title: "La fiesta de los moribundos",
      subtitle: "Monotemáticos",
      description:
        "¿Qué es la vida sin un poco de drama?, sería lo mismo que sin mucha comedia: Una cosa sin arte. El concepto detrás de la linea de posters promocionales para la puesta en escena de “La Fiesta de los Moribundos” del grupo Monotemáticos.",
      link: "/our-works/monotematicos"
    },
    {
      image: require("../../images/flor-de-lis/Thumbnail.jpg"),
      title: "Blue Viking",
      subtitle: "Flor De Lis",
      description:
        "Variar un poco en tu producto inicial es sano, y más si lo tomas como prueba para incurcionar en otro mercado. La linea BlueViking de Flor de Lis está pensadaba desde hacía meses cuando se nos pidio que diseñaramos su linea gráfica y empaque.",
      link: "/our-works/flor-de-lis"
    }
  ]);

  const shuffle = projects => {
    let currentIndex = projects.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = projects[currentIndex];
      projects[currentIndex] = projects[randomIndex];
      projects[randomIndex] = temporaryValue;
    }
    return projects;
  };

  const randomizedProjects = shuffle(projects);

  const gridTiles = randomizedProjects.map(
    ({ image, title, subtitle, description, link }) => (
      <GridListTile key={image}>
        <Link to={link}>
          <Image src={image} alt={title} />
          <ImageOverlay>
            <Project>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectClient>{subtitle}</ProjectClient>
              <ProjectDescription>{description}</ProjectDescription>
            </Project>
            <LookButton>Ver más</LookButton>
          </ImageOverlay>
        </Link>
      </GridListTile>
    )
  );

  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <GridList cols={matchMediaQuery ? 2 : 3} spacing={0} cellHeight="auto">
        {gridTiles}
      </GridList>
    </Animated>
  );
};

export default OurWorks;
