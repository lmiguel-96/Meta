import React from "react";
import "./Our-Services.scss";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { arrowGenerator } from "./arrowGenerator";
import { ArrowTooltip } from "./ArrowTooltip";
import { ServiceIcon } from "./ServiceIcon";
export const useStylesArrow = makeStyles(theme => ({
  tooltip: {
    position: "relative",
    fontSize: "8pt",
    backgroundColor: "#5c5c5c",
    color: "white"
  },
  arrow: {
    position: "absolute",
    fontSize: 6,
    borderColor: "#1e1e1e",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  },
  popper: arrowGenerator("#5c5c5c")
}));
ArrowTooltip.propTypes = {
  title: PropTypes.node
};
export const OurServices = () => {
  const Section = ({ Titulo, Descripcion, Color, Services, Key }) => {
    return (
      <div className="SectionService" key={Key.toString()}>
        <div className="SectionFlex">
          <div className={`SectionBgTitle ${Color}`}>
            <div className={`SectionTitle text-light`}>{Titulo}</div>
          </div>
          <div className="text-center SectionIcons">
            {Services.map(service => ServiceIcon(service))}
          </div>
        </div>
        <div className="d-flex">
          <p className={`SectionDescription ${Color}-font p-1`}>
            {Descripcion}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="OurServicesLayout">
      <h1 className="justify-content-center font-weight-bolder ServiceTitle OnMobileHide">
        MIRA TODOS LOS SERVICIOS QUE TE OFRECEMOS
      </h1>
      <h2 className="justify-content-center font-weight-bolder ServiceTitle OnDesktopHide">
        Toca los iconos para saber más de nuestros servicios
      </h2>
      <Section
        Titulo={<b>BRANDING</b>}
        Descripcion={
          "Creación de marcas de todo tipo, parametros para su aplicación y estrategias de comportamiento en el mercado."
        }
        Color="Branding"
        Key={1}
        Services={[
          {
            name: "Naming",
            image: "Naming",
            popoverText:
              " Todo lo referente a la identidad “verbal” de la marca; Desde su nombre, slogan y taglines hasta sus dominios en web y socialmedia, la disponibilidad de sus IDs y las ventajas o fortalezas frente al mercado (el público y la competencia)."
          },
          {
            name: "Logo",
            image: "Logo",
            popoverText:
              "El nucleo de la identidad visual de la marca. Trabaja de la mano con nosotros, recibe varias propuesta y propón correcciones; todo para llegar al logo ideal para que tu marca, digitalizado y en todas sus versiones y estilos."
          },
          {
            name: "Recursos",
            image: "Recursos",
            popoverText:
              "Definimos y desarrollamos, uno por uno, cada elemento que compone la marca; Cromática, tipografia, iconografía, patrones y otros recursos graficos y compositivos que habria de usarse como lenguaje visual y complemento de la misma."
          },
          {
            name: "Aplicacion",
            image: "Aplicación",
            popoverText:
              "Piezas corporativas que necesiten la marca para identificarse; Por ejemplo: Papelería, Material POP, Uniformes, Flota Vehicular, etc)."
          },
          {
            name: "Environment",
            image: "Environment",
            popoverText:
              "Diseño de interiores de la instalación comercial, incluyendo diseño de señalética, museografía (recorrido de tienda), corporeos,  vitrina, stands comerciales, etc."
          }
        ]}
      />
      <Section
        Titulo={
          <div>
            SOCIAL<b>MEDIA</b>
          </div>
        }
        Descripcion={
          "La gestión de la marca en entornos sociales digitales. Administración de cuentas en redes sociales, monitoreo, interacción con el público, optimización de perfiles y estrategias de promoción y mercado."
        }
        Color="SocialMedia"
        Key={2}
        Services={[
          {
            name: "Manejo de Red",
            image: "Manejo de Red",
            popoverText:
              "Manejo total de una red social, incluyendo gestion de contenido, diseño de artes y interacción activa con la audiencia."
          },
          {
            name: "Banco de    Recursos",
            image: "Banco de Recursos",
            popoverText:
              "Sesiones fotográficas periódicas, Ilustraciones, Infografías, etc."
          },
          {
            name: "Estadisticas",
            image: "Estadisticas",
            popoverText:
              "Preparación y presentación de estadistícas mensuales, donde se indica el comportamiento de la red, tráfico, target alcanzado, post con mas interacción y se estudian en función a saber datos útiles, como el producto más popular, comparación con el numero de ventas y el trafico en el local comercial, efectividad de estrategias, etc."
          }
        ]}
      />
      <Section
        Titulo={<b>ADVERTISING</b>}
        Descripcion={
          "Ejecución de piezas y campañas dirigidas a la promoción de la marca, producto o evento en medios convencionales, exteriores o en sus propias instalaciones."
        }
        Color="Advertising"
        Key={3}
        Services={[
          {
            name: "Avisos",
            image: "Avisos",
            popoverText:
              "Frentes comerciales, diseño de microperforado o vinil, poster comerciales y promocionales, vallas, anuncios exteriores, caminos de calle y cualquier otro tipo de pieza de promoción o descriptiva, incluida su producción e instalación."
          },
          {
            name: "Flyering",
            image: "Flyering",
            popoverText:
              "Piezas que sirvan para divulgacion informativa de un servicio, evento o producto especificos; como folletos, posters promocionales, brochures, etc."
          },
          {
            name: "Campañas",
            image: "Campañas",
            popoverText:
              "Planeación, montaje y ejecución  de campañas publicitarias de diferentes escalas y alcances."
          },
          {
            name: "Estudio de Mercado",
            image: "Estudio de Mercado",
            popoverText:
              "Análisis de entorno y competencia con respecto a un producto, estrategia, entorno o cualquier otra variable; y la posterior traducción de esto en estrategias."
          }
        ]}
      />
      <Section
        Titulo={
          <div>
            WEB<b>DESIGN</b>
          </div>
        }
        Descripcion={
          "Desarrollo de plataformas web modernas y personalizadas que implementamos a su negocio o marca."
        }
        Color="WebDesign"
        Key={4}
        Services={[
          {
            name: "LandingPage",
            image: "LandingPage",
            popoverText:
              "Plataforma de promoción e información para negocios, directa y que cumple con la función de redirigir al usuario a la dirección y contacto pertinente (correo electronico, redes sociales, numeros de atención, etc). "
          },
          {
            name: "WebSite",
            image: "WebSite",
            popoverText:
              "Sitio multiplataforma con contenido (multimedia, informativo y didactico) con mayor cobertura del negocio y una experiencia de usuario más completa."
          },
          {
            name: "Apps",
            image: "Apps",
            popoverText:
              "Single page applications, progressive web apps, mobile apps o algún productos que brinden al usuario una experiencia en dispositivos personales."
          }
        ]}
      />
      <Section
        Titulo={
          <div>
            GRAPHIC<b>DESIGN</b>
          </div>
        }
        Descripcion={
          " Disponibilidad de nuestro departamento de diseño para la elaboración de piezas digitales y offset, como menús, empaques (packaging), etiquetas, invitaciones, portadas, rotulaciones o cualquier formato que no tenga necesariamente fines publicitarios o de promoción."
        }
        Color="GraphicDesign"
        Key={5}
        Services={[
          {
            name: "Menús, Catalogos ",
            image: "Menus, Catalogos ",
            popoverText:
              "Diseño de menús y cartas de precio e items para empresas (restaurants y tiendas), con formatos variables; desde cartas y menús para clientes, tendcards para mesa, wall menus. "
          },
          {
            name: "Didacticos",
            image: "Didacticos",
            popoverText:
              "Desplegables informativos, Infografías, mapas, memos, presentaciones y cualquier material informativo."
          },
          {
            name: "Edición de Video",
            image: "Edición de Video",
            popoverText:
              "Montaje y edición de material multimadia para comerciales, presentaciones, publicaciones, eventos o cualquier otro medio."
          },
          {
            name: "Animación",
            image: "Animación",
            popoverText:
              "Animación de material gráfico, información, tipografía, menús, productos o incluso personajes o escenarios."
          },

          {
            name: "Mascota",
            image: "Mascota",
            popoverText:
              "Diseño de personajes representativos de la marca o producto, asi como sus situaciones, entornos, escenas y aplicaciones."
          }
        ]}
      />
      <Section
        Titulo={<b>COPYWRITING</b>}
        Descripcion={
          "Redacción y composición de textos para diferentes medios y usos."
        }
        Color="Copywriting"
        Key={6}
        Services={[
          {
            name: "ToolKit",
            image: "ToolKit",
            popoverText:
              "Manual de normativas, conceptos y definiciones que unifican el criterio de todos los miembros de una empresa. Esto para siempre asegurarse de que el comportamiento empresarial y frente al público incluya la cultura de la marca."
          },
          {
            name: "Redacción Comercial",
            image: "Redacción Comercial",
            popoverText:
              "Redacción de guión para publicidad (televisión, radio, web)."
          },
          {
            name: "Blogs",
            image: "Blogs",
            popoverText: "Redacción de contenido para publicaciones de Blogs."
          }
        ]}
      />
    </div>
  );
};
