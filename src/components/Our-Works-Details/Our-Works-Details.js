import React from "react";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Animated } from "react-animated-css";

const WorkDetailsContainer = styled(Container)`
  padding-left: 0 !important;
  padding-right: 0 !important;
  background-color: #d9d9d9;
  height: 100%;
`;

const ProjectTitle = styled.h1`
  padding-top: 1em;
  padding-right: 20px;
  text-align: right;
  width: 100%;
  font-weight: 800;
  line-height: 1em;
  margin-bottom: 0;
`;

const ProjectSubtitle = styled.h2`
  padding-right: 20px;
  text-align: right;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectParagraph = styled.p`
  padding: 40px 30px;
  margin: 0;
  font-size: 16px;
  font-weight: 700 !important;
  font-family: "Nunito", sans-serif;
  text-align: left;
`;

const ProjectFooter = styled.p`
  padding: 40px 30px;
  margin: 0;
  font-size: 14px;
  font-weight: 700 !important;
  font-family: "Nunito", sans-serif;
  text-align: right;
  color: #f4f4f4;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
`;

const ProjectBlockquote = styled.q`
  width: 50%;
  padding: 8px 42px;
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  text-align: left;
`;

export const OurWorksDetails = ({ match }) => {
  const projectID = match.params.projectID;
  console.log(projectID);
  const projects = {
    "tres-puntos-packaging": {
      layout: "1",
      title: "Packaging",
      client: "Tres Puntos",
      images: [
        require("../../images/tres-puntos-packaging/image 1.jpg"),
        require("../../images/tres-puntos-packaging/image 2.jpg"),
        require("../../images/tres-puntos-packaging/image 3.jpg")
      ],
      paragraphs: [
        `Time for snacks! Pero ¿qué pasa si la marca no quiere perder su estetica recien hecha?. Es necesario entender la importacia del Packaging en el mercado. Este es el primer contacto directo con el cliente antes de la toma de decisiones definitiva: ¿Comprar o no comprar?.
         Este producto, muy bien recibido, requería un packaging suficientemente poderoso para conquistar el anaquel en los supermercados, pero al mismo tiempo muy amigable y receptivo, que mostrara la confianza de la empresa en el producto y su propuesta y promesa hacia su público.`,
        `Fuimos por una salida con mucha estructura, donde el producto pudiera verse siempre a traves del empaque. No solo eso, sino que ademas el labeling (etiqueta) en el empaque pudiese complementarlo jugando con contrastes de color y forma. `,
        `Una respuesta inmediata siempre será bien recibida, pero es la recepción y constancia del producto lo que va a garantizar su permanencia en oferta… Un buen Packaging acorta ese camino. `
      ],
      footer: `Desarrollado para TresPuntos Propiedad intelectual META studio, 2018`
    },
    "tres-puntos-social": {
      layout: "1",
      title: "Social Media Management",
      client: "Tres Puntos",
      images: [
        require("../../images/tres-puntos-social/image 1.jpg"),
        require("../../images/tres-puntos-social/image 2.jpg"),
        require("../../images/tres-puntos-social/image 3.jpg")
      ],
      paragraphs: [
        `La presencia digital es, hoy día, la más importante en todo negocio que busque trascender en alcance y aumentar ventas optimizando la presentación de su producto. Tres Puntos llegó a nosotros con la inquietud de ser capaces de mostrar a sus seguidores, no solo el producto, sino toda una personalidad detrás de la marca; Haciendose al momento más relacionable y cercana a ellos. `,
        `Mantener la calidad en fotografía, asegurandonos de que cada plato y producto salga en las mejores condiciones; y creando simbolos (paleta de color, chistes internos, iconos…) desarrollamos un lenguaje facil de calar en su público. `,
        `Mantener coherencia en la estrategia de redes con los datos que el trafico de la misma arroja es vital para saber con seguridad que camino tomar. La presencia digital de Tres Puntos ha crecedo firmemente y lo ha hecho dejando en su público una imagen fresca, joven y ocurrente en la que confiar cuando estan en busqueda de una pausa en su día. `
      ],
      footer: `Desarrollado para TresPuntos Propiedad intelectual META studio, 2018`
    },
    "tres-puntos-poster": {
      layout: "1",
      title: "Posters",
      client: "Tres Puntos",
      images: [
        require("../../images/tres-puntos-poster/image 1.jpg"),
        require("../../images/tres-puntos-poster/image 2.jpg"),
        require("../../images/tres-puntos-poster/image 3.jpg")
      ],
      paragraphs: [
        `Let’s Poster it! Los buenos momentos siempre merecen ser inmortalizados, pero… ¿Qué pasa con los “momentos” de una marca? `,
        `Una linea de posters que registra algunos de los mejores momentos del año de la marca TresPuntos. Artes, estilos, proyectos… Atributos que vende a la marca como trendy incluso despues de haber dejado etapas atrás.
         El público siempre agradece la humildad y lo real de una empresa y la marca es la perfecta para resaltar esas cualidad. Invitando al espectador a un viaje recordando su viaje haciendo que este se enganche más con ella al sentirla parte de su propia historia.`,
        `Piezas diseñadas para ser adaptadas a bastidores, posters, material POP, medios digitales y otro sin fin de plataformas para sacarles el máximo provecho. `
      ],
      footer: `Desarrollado para TresPuntos Propiedad intelectual META studio, 2018`
    },
    "red-rocket": {
      layout: "1",
      title: "Menú",
      client: "Red Rocket",
      images: [
        require("../../images/red-rocket/image 1.jpg"),
        require("../../images/red-rocket/image 2.jpg"),
        require("../../images/red-rocket/image 3.jpg")
      ],
      paragraphs: [
        `Una gran cantidad de opciones planeadas en un espacio muy reducido, fue el reto mayor cuando era bien sabido que un menú de una pieza era requerido como carta para RedRocket. La idea era presentar este numero de platos al público nuevo sin necesidad entregarles mas de una pieza, así podrían ojear a primeros vistazos todas las secciones. `,
        `Solución: Un desplegable muy comodo y facil de manejar y soportar con una sola mano. El mismo contiene todas y cada una de las secciones de comidas y platos con descripciones y recomendaciones. Dispuestas en un sentido de lectura claro y usando codigos de color para ubicar al lector. `,
        `Lo que restaba era sumergir al público en esta temática espacial tan caracteristicas, incluso con pequeños easter eggs escondidos en el arte. Una pieza con resultados asombrosos de exploración del menú por parte de los visitantes, que aunque extenso y saturado de opciones, nunca deja nada en el plato. `
      ],
      footer: `Desarrollado para RedRocket Propiedad intelectual META studio, 2018`
    },
    oromo: {
      layout: "1",
      title: "Coffee Bags",
      client: "Oromo",
      images: [
        require("../../images/oromo/image 1.jpg"),
        require("../../images/oromo/image 2.jpg"),
        require("../../images/oromo/image 3.jpg")
      ],
      paragraphs: [
        `Un buen empaque y un buen café tienen algo en común: Ambos son conciliadores de culturas. Oromo, reconocidos en poco tiempo por sus exoticos pero amigables blends de café. En un mercado como el Latinoamericano, una de las cosas más importantes es dejar bien en claro las virtudes y beneficio que un producto tiene por sobre los demás. `,
        `El empaque es la puerta de entrada de un producto al consumidor, y aunque diferentes poblaciones se vean atraídas por diferentes características (color, estilo, mensaje), todas están dispuestas a pagar más por un producto con buen empaque, porque refleja que la empresa se preocupa genuinamente por la calidad. `,
        `Tomar el color, siendo este uno de los elemtos intuitivos más distintivos de una marca, como separador entre las diferentes opciones y ediciones del productos, fue el concepto detrás de este diseño. Relacionando cada color de la paleta corporativa con las propiedades de mercado y producto de cada blend.
          Como resultado se crea un lenguaje visual con el cliente que mejora el tiempo de decisión en al comprar y la memorabilidad de la marca aun dentro del hogar.`
      ],
      footer: `Desarrollado para Oromo Coffee & Dessert Propiedad intelectual META studio, 2019`
    },
    oink: {
      layout: "1",
      title: "Menú",
      client: "Oink",
      images: [
        require("../../images/oink/image 1.jpg"),
        require("../../images/oink/image 2.jpg"),
        require("../../images/oink/image 3.jpg")
      ],
      paragraphs: [
        `El reciente proyecto de Rebrand para la marca del restuarant de PulledPork Oink, incluía tambien, como es de esperarse, el rediseño de su menú. Su marca necesitaba consolidar y justificar un concepto de caricaturas retro y además llevar al lector a que lo explorara todo en busca de hacer rotar platos que por lo general las personas omitían. `,
        `Así fue como nos decidimos a preocuparmos por trasladar el trabajo de lettering utilizado en las coletillas de las caricaturas y programas clásicos para logotipar cada uno de las opciones que ofrecian. Esto, llevaba la contraria al la vieja ley de usar siempre fotografías en la carta,sin duda invita a quien lo lea a crearse una imagen a travez de este “nombre graficado”, justo como en la TV clásica.  `,
        `Hubo una respuesta inmediada. El flujo por pedidos de platos que habian sido olvidados no solo aumentó la respuesta a la marca de parte de los clientes, sino que además permitió explorar nuevas opciones en vista de contar con un metodo que, a Oink en particular y a su audiencia, les funcionó. `
      ],
      footer: `Desarrollado para Oink PorkHouse Propiedad intelectual META studio, 2017`
    },
    monotematicos: {
      layout: "1",
      title: "La fiesta de los moribundos",
      client: "Monotemáticos",
      images: [
        require("../../images/monotematicos/image 1.jpg"),
        require("../../images/monotematicos/image 2.jpg"),
        require("../../images/monotematicos/image 3.jpg")
      ],
      paragraphs: [
        `¿Qué es la vida sin un poco de drama?, sería lo mismo que sin mucha comedia: Una cosa sin arte. El concepto detrás de la linea de posters promocionales para la puesta en escena de “La Fiesta de los Moribundos” del grupo Monotemáticos. `,
        `Aunque llena de “vida” y color, la obra, un poco subida de tono por su comedia oscura, debia dejar entrever su cometido y dirigirse exclusivamente a llamar la atención de adultos a quienes pudiera interesar reirse un poco del tema en cuestion: La Muerte. `,
        `Con influencia del Mambo, Cabaret y el Jazz, debiamos hacer que cada pieza se “escuchara”, que el espectador compusiera su misma melodía a través de la imagen, dejandose entender que estaría frente a un espectaculo donde no solo habria una satírica historia en puesta en escena, sino tambien un espectaculo de baile, música y color, como nunca nadie habló de la muerte. `
      ],
      footer: `Desarrollado para Monotemáticos Propiedad intelectual META studio, 2017`
    },
    "flor-de-lis": {
      layout: "1",
      title: "Blue Vikings",
      client: "Flor De Lis",
      images: [
        require("../../images/flor-de-lis/image 1.jpg"),
        require("../../images/flor-de-lis/image 2.jpg"),
        require("../../images/flor-de-lis/image 3.jpg")
      ],
      paragraphs: [
        `Variar un poco en tu producto inicial es sano, y más si lo tomas como prueba para incurcionar en otro mercado. La linea BlueViking de Flor de Lis está pensadaba desde hacía meses cuando se nos pidio que diseñaramos su linea gráfica y empaque. `,
        `La tarea era de cuidado, puesto que una marca con un público femenino casi en su totalidad, iba a dirigir una linea entera solo para hombres, que iba a ser expuesto junto a sus demás productos. Es decir, cumplir con una expectativa de diferenciación pero dentro de una misma estética. `,
        `Y aunque el color es un elemento cliché para diferenciar generos en el público de productos de cuidado personal, fue un complemto obligatorio para proyectar la sensación fresca relacionada a sus beneficios. Esto llevado al tema “viking”, que nos permitió jugar con cartas nauticas, shades de azul a plateado, paleta de valores bajos como negro y plomo y hasta un empaque embotellado clasico de cristal, fue justo lo que necesitaba BlueVinking para dejar de ser una versión femenina de los productos de Flor de Lis y consagrar a la marca como una casa de confección para todo público. `
      ],
      footer: `Desarrollado para Flor de Lis Propiedad intelectual META studio, 2019`
    }
  };

  const getLayout = (projects, ID) => {
    let layout = null;
    switch (projects[ID].layout) {
      case "1":
        layout = (
          <React.Fragment>
            <ProjectTitle>{projects[ID].title}</ProjectTitle>
            <ProjectSubtitle>{projects[ID].client}</ProjectSubtitle>
            <ProjectImage src={projects[ID].images[0]} />
            <ProjectParagraph>{projects[ID].paragraphs[0]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[1]} />
            <ProjectParagraph>{projects[ID].paragraphs[1]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[2]} />
            <ProjectParagraph>{projects[ID].paragraphs[2]}</ProjectParagraph>
            <ProjectFooter>{projects[ID].footer}</ProjectFooter>
          </React.Fragment>
        );
        break;
      case "2":
        layout = (
          <React.Fragment>
            <ProjectTitle>{projects[ID].title}</ProjectTitle>
            <ProjectSubtitle>{projects[ID].client}</ProjectSubtitle>
            <ProjectImage src={projects[ID].images[0]} />
            <ProjectParagraph>{projects[ID].paragraphs[0]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[1]} />
            <ProjectParagraph>{projects[ID].paragraphs[1]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[2]} />
            <ProjectBlockquote>{projects[ID].paragraphs[2]}</ProjectBlockquote>
            <ProjectImage src={projects[ID].images[3]} />
            <ProjectParagraph>{projects[ID].paragraphs[3]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[4]} />
            <ProjectParagraph>{projects[ID].paragraphs[4]}</ProjectParagraph>
          </React.Fragment>
        );
        break;
      case "3":
        layout = (
          <React.Fragment>
            <ProjectTitle>{projects[ID].title}</ProjectTitle>
            <ProjectSubtitle>{projects[ID].client}</ProjectSubtitle>
            <ProjectImage src={projects[ID].images[0]} />
            <ProjectParagraph>{projects[ID].paragraphs[0]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[1]} />
            <ProjectParagraph>{projects[ID].paragraphs[1]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[2]} />
            <ProjectBlockquote>{projects[ID].paragraphs[2]}</ProjectBlockquote>
            <ProjectImage src={projects[ID].images[3]} />
            <ProjectParagraph>{projects[ID].paragraphs[3]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[4]} />
            <ProjectBlockquote>{projects[ID].paragraphs[4]}</ProjectBlockquote>
            <ProjectImage src={projects[ID].images[5]} />
            <ProjectParagraph>{projects[ID].paragraphs[5]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[6]} />
            <ProjectParagraph>{projects[ID].paragraphs[6]}</ProjectParagraph>
            <ProjectImage src={projects[ID].images[7]} />
            <ProjectParagraph>{projects[ID].paragraphs[7]}</ProjectParagraph>
          </React.Fragment>
        );
        break;
    }
    return layout;
  };

  const layout = getLayout(projects, projectID);

  return (
    <WorkDetailsContainer fixed>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        {layout}
      </Animated>
    </WorkDetailsContainer>
  );
};

export default withRouter(OurWorksDetails);
