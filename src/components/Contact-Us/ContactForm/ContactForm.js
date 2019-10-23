import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Window from "../Window/Window";
import ServiceItem from "../ServiceItem/ServiceItem";
import { Fab, makeStyles } from "@material-ui/core";

const StyledContainer = styled.div`
  background-color: transparent;
  border: solid 1px transaparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  &:last-child {
    padding-bottom: 10px;
  }
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

const StyledInput = styled.input.attrs({
  required: true
})`
  width: 100%;
  padding: 0px 6px 0px 17px;
  border: none;
  color: #1e1e1e;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  background-color: transparent;
  font-weight: bold;
  outline: none;
  font-size: 16px;
  &:focus {
    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

const StyledTextarea = styled.textarea.attrs({
  placeholder: "Your Message",
  rows: "6",
  required: true
})`
  width: 100%;
  height: auto;
  resize: none;
  outline: none;
  border: none;
  color: #1e1e1e;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0px 6px 0px 17px;
  font-size: 16px;
  &:focus {
    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

const StyledForm = styled.form.attrs({
  "data-netlify": "true",
  name: "contact-us",
  method: "POST"
})`
  padding-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ServiceList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const FormTitle = styled.h4`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  color: #232020;
  font-weight: 800;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;

  large {
    color: #afafaf;
    font-size: 18px;
  }
`;

const useStyles = makeStyles(() => ({
  fab: {
    justifySelf: "flex-end",
    borderRadius: "15px",
    width: "100%",
    backgroundColor: "white",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "bold",
    color: "#1e1e1e",
    border: "solid 4px #1e1e1e",
    "&:hover": {
      backgroundColor: "#1e1e1e",
      color: "white",
      fontWeight: "bold",
      border: "solid 4px #1e1e1e"
    }
  }
}));

const ContactForm = props => {
  const classes = useStyles();
  const { activeService } = props;
  const [services, setServices] = useState([
    {
      name: "branding",
      title: "Branding",
      id: "branding",
      value: "branding",
      active: false,
      color: "#8B0753",
      image: require("../../../images/Logo.png"),
      description:
        "Creación de marcas de todo tipo, parametros para su aplicación y estrategias de comportamiento en el mercado."
    },
    {
      name: "socialmedia",
      title: "Social Media",
      id: "socialmedia",
      value: "socialmedia",
      active: false,
      color: "#ED2649",
      image: require("../../../images/Manejo de Red.png"),
      description:
        "La gestión de la marca en entornos sociales digitales. Administración de cuentas en redes sociales, monitoreo, interacción con el público, optimización de perfiles y estrategias de promoción y mercado."
    },
    {
      name: "advertising",
      title: "Advertising",
      id: "advertising",
      value: "advertising",
      active: false,
      color: "#F26E21",
      image: require("../../../images/Campañas.png"),
      description:
        "Ejecución de piezas y campañas dirigidas a la promoción de la marca, producto o evento en medios convencionales, exteriores o en sus propias instalaciones."
    },
    {
      name: "webdesign",
      title: "Web Design",
      id: "webdesign",
      value: "webdesign",
      active: false,
      color: "#F19D23",
      image: require("../../../images/WebSite.png"),
      description:
        "Desarrollo de plataformas web modernas y personalizadas que implementamos a su negocio o marca."
    },
    {
      name: "graphicdesign",
      title: "Graphic Design",
      id: "graphicdesign",
      value: "graphicdesign",
      active: false,
      color: "#FFC10D",
      image: require("../../../images/Mascota.png"),
      description:
        "Disponibilidad de nuestro departamento de diseño para la elaboración de piezas digitales y offset, como menús, empaques (packaging), etiquetas, invitaciones, portadas, rotulaciones o cualquier formato que no tenga necesariamente fines publicitarios o de promoción."
    },
    {
      name: "copywriting",
      title: "Copywriting",
      id: "copywriting",
      value: "copywriting",
      active: false,
      color: "#91AF14",
      image: require("../../../images/Blogs.png"),
      description:
        "Redacción y composición de textos para diferentes medios y usos."
    },
    {
      name: "newsletter",
      title: "Newsletter",
      id: "newsletter",
      value: "newsletter",
      active: true,
      color: "#0085FF",
      image: require("../../../images/Newsletter.png"),
      description:
        "Recibe contenido, noticias, bolétines, y promociones especiales cada mes. Entérate antes que nadie sobre las últimas novedades sobre social media, diseño, marketing"
    }
  ]);

  useEffect(() => {
    const selectedIndex = Number(activeService);
    if (selectedIndex) handleSelectedService(selectedIndex);
  }, [activeService]);

  const handleSelectedService = selectedIndex => {
    setServices(
      services.map((service, serviceIndex, services) => {
        if (serviceIndex === selectedIndex) {
          return {
            ...service,
            active: services[selectedIndex].active ? false : true
          };
        } else {
          return service;
        }
      })
    );
  };

  return (
    <StyledForm data-netlify="true" name="contact-us" method="POST">
      <input type="hidden" name="form-name" value="contact-us" />
      <input
        type="hidden"
        name="subject"
        value="Nuevo mensaje desde onlymeta.com"
      />
      <FormTitle>
        ¡Escríbenos!
        <small>&nbsp;Selecciona los servicios que te interesan</small>
      </FormTitle>
      <ServiceList>
        {services.map((service, i) => (
          <ServiceItem
            {...service}
            click={handleSelectedService.bind(this, i)}
            key={service.id}
          />
        ))}
      </ServiceList>
      <StyledContainer>
        <Window title="Nombre">
          <StyledInput name="name" placeholder="Tú nombre" required />
        </Window>
        <Window title="Email">
          <StyledInput name="email" placeholder="tú email" required />
        </Window>
      </StyledContainer>
      <StyledContainer>
        <Window title="Mensaje">
          <StyledTextarea name="message" placeholder="Tú mensaje" required />
        </Window>
      </StyledContainer>
      <StyledContainer>
        <Fab
          className={classes.fab}
          variant="extended"
          size="large"
          aria-label="add"
          type="submit"
        >
          Enviar mensaje
        </Fab>
      </StyledContainer>
    </StyledForm>
  );
};

export default ContactForm;
