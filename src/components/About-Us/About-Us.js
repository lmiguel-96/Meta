import React from "react";
import "./About-Us.scss";
import TextLoop from "react-text-loop";
import { Animated } from "react-animated-css";
import image from "../../images/fachada.jpg";
export const AboutUs = () => {
  const phrases = [
    { text: "tu marca sea inolvidable", color: "#EB2B8F" },
    { text: "tu comunidad en redes crezca", color: "#ed2649" },
    { text: "tu campaña alcance su meta", color: "#f26e21" },
    { text: "tu sitio web sea efectivo", color: "#f19d23" },
    { text: "tu empaque eleve tu ventas", color: "#ffc10d" },
    { text: "tu mensaje sea transcendente", color: "#91af14" },
    { text: "te mantengamos a la vanguardia", color: "#0085ff" }
  ];
  return (
    <div className="AboutLayout">
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <img src={image} alt="" className="img-fluid" />
        <h2 className="AboutTitle">
          <span>
            Sabemos que quieres que <br />
            <TextLoop
              springConfig={{ stiffness: 100, damping: 9 }}
              className="font-weight-bolder"
            >
              {phrases.map(({ text, color }) => (
                <span style={{ color }}>{text}</span>
              ))}
            </TextLoop>
            <br />y tambien sabemos como lograrlo
          </span>
        </h2>
        <div className="text-wk-right">
          <p className="AboutText">
            Meta: (1) pref: (del griego. Metá), más allá, después, por el medio,
            y también cambio o mutación.
            <br />
            <br />
            (2) agcia: (del creativo Beyond), grupo de profesionales con
            experiencia en branding, publicidad, programación y diseño reunidos
            bajo el nombre de un nuevo estudio creativo, que junta sus talentos
            e ideas en función de hacer llegar las marcas aliadas hasta el
            siguiente nivel.
            <br />
            <br />
            <div className="text-right">
              <p className="mini-text">
                (Definiciones no aprobadas por la RAE… todavía)
              </p>
            </div>
          </p>
        </div>
      </Animated>
    </div>
  );
};
