import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { ArrowTooltip } from "./ArrowTooltip";

export function ServiceIcon(service) {
  const [active, setActive] = useState(false);
  const iconOn = () => {
    setActive(true);
  };
  const iconOff = () => {
    setActive(false);
  };
  return (
    <div onMouseEnter={iconOn} onMouseLeave={iconOff}>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <ArrowTooltip
          title={service.popoverText}
          placement="top-end"
          key={service.name}
          open={active}
        >
          <div className="SectionIcon flex-row m-1">
            <img
              src={require(`../../images/${service.image}.png`)}
              alt=""
              width="50"
              height="50"
              className={active ? "activeIcon" : ""}
            />
            <span className="d-block text-center tenpt">
              <b>{service.name}</b>
            </span>
          </div>
        </ArrowTooltip>
      </Animated>
    </div>
  );
}
