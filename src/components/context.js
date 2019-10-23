import React, { createContext, useState } from "react";
export const MetaContext = createContext();

export const MetaProvider = props => {
  const AnimationFX = () => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 1);
  };
  const [isVisible, setVisible] = useState(true);
  const [selectedSlide, setSlide] = useState(0);
  const initialValue = [
    {
      id: 1,
      title: "Galletitas de Tres Puntos Packaging",
      imageFolder: "tres-puntos-packaging",
      description:
        "Time for snacks! Pero ¿qué pasa si la marca no quiere perder su estetica recien hecha?. Es necesario entender la importacia del Packaging en el mercado. Este es el primer contacto directo con el cliente antes de la toma de decisiones definitiva: ¿Comprar o no comprar?.",
      idService: 4
    },
    {
      id: 2,
      title: "Oromo Beans Grain Packaging",
      imageFolder: "oromo",
      description:
        "Un buen empaque y un buen café tienen algo en común: Ambos son conciliadores de culturas. Oromo, reconocidos en poco tiempo por sus exoticos pero amigables blends de café.",
      idService: 4
    },
    {
      id: 3,
      title: "Posters Promo de La Fiesta de los Moribundos",
      imageFolder: "monotematicos",
      description:
        "¿Qué es la vida sin un poco de drama?, sería lo mismo que sin mucha comedia: Una cosa sin arte. El concepto detrás de la linea de posters promocionales para la puesta en escena de “La Fiesta de los Moribundos” del grupo Monotemáticos.",
      idService: 4
    },
    {
      id: 4,
      title: "Blue Vikings de Flor de Lis",
      imageFolder: "flor-de-lis",
      description:
        "Variar un poco en tu producto inicial es sano, y más si lo tomas como prueba para incurcionar en otro mercado. La linea BlueViking de Flor de Lis está pensadaba desde hacía meses cuando se nos pidio que diseñaramos su linea gráfica y empaque.",

      idService: 0
    },
    {
      id: 5,
      title: "Menú para Oink PorkHouse",
      imageFolder: "oink",
      description:
        "El reciente proyecto de Rebrand para la marca del restuarant de PulledPork Oink, incluía tambien, como es de esperarse, el rediseño de su menú. Su marca necesitaba consolidar y justificar un concepto de caricaturas retro.",
      idService: 4
    },
    {
      id: 6,
      title: "Red Rocket Menú",
      imageFolder: "red-rocket",
      description:
        "Una gran cantidad de opciones planeadas en un espacio muy reducido, fue el reto mayor cuando era bien sabido que un menú de una pieza era requerido como carta para RedRocket.",
      idService: 4
    },
    {
      id: 7,
      title: "Posters de Tres Puntos",
      imageFolder: "tres-puntos-poster",
      description:
        "Let’s Poster it! Los buenos momentos siempre merecen ser inmortalizados, pero… ¿Qué pasa con los “momentos” de una marca?",
      idService: 4
    },
    {
      id: 8,
      title: "Manejo de Redes Sociales de Tres Puntos",
      imageFolder: "tres-puntos-social",
      description:
        "La presencia digital es, hoy día, la más importante en todo negocio que busque trascender en alcance y aumentar ventas optimizando la presentación de su producto.",
      idService: 1
    }
  ];

  const [stateOptions] = useState(initialValue);

  return (
    <MetaContext.Provider
      value={{
        selectedSlide,
        isVisible,
        slidesData: stateOptions,
        updateCurrentSlide: index => {
          if (selectedSlide !== index) {
            setSlide(index);
            AnimationFX();
          }
        }
      }}
    >
      {props.children}
    </MetaContext.Provider>
  );
};
