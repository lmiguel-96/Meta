import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Transition from "react-transition-group/Transition";

import arrow from "../../../images/arrow-down.svg";

const initialMenuHeight = 30;
const optionHeight = 50;
const transitionDuration = 100;

const MenuBox = styled.div`
  position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
  z-index: 200;
  top: 38%;
  left: 0;
  right: 15%;
`;

const MenuContainer = styled.div`
  border: 4px solid #1e1e1e;
  background-color: white;
  width: 100%;
  position: relative;
  z-index: 1;
  height: ${({ height }) => height + "px"};
  transition: height 0.2s ease-in-out;
`;

const MenuHeader = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito", sans-serif;
  border-bottom: 4px solid #1e1e1e;
`;

const MenuCaretBox = styled.div`
  height: 29px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #1e1e1e;
  cursor: pointer;
  user-select: none;
`;

const MenuArrow = styled.img`
  width: 14px;
  object-fit: contain;
  transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "none")};
  transition: transform 0.2s ease-in-out;
`;

const MenuLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  display: block;
  text-decoration: none;

  &.active > div {
    background-color: #1e1e1e;
    color: white;
  }
  &:last-child {
    border-bottom: solid 4px #1e1e1e;
  }
`;

const MenuItem = styled.div`
  line-height: 1;
  display: flex;
  align-items: center;
  background-color: white;
  color: #1e1e1e;
  font-family: "Nunito", sans-serif;
  padding-left: 17px;
  user-select: none;
  font-weight: 900;
  text-align: center;
`;

const MenuOption = styled(MenuItem)`
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const AnimatedOpacity = styled.div`
  transition: opacity ${transitionDuration}ms ease-in-out;
  opacity: ${({ animationState }) => (animationState === "entered" ? 1 : 0)};
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          route: "/home",
          name: "Home"
        },
        {
          route: "/about",
          name: "Nosotros"
        },
        {
          route: "/services",
          name: "Servicios"
        },
        {
          route: "/our-works",
          name: "Portafolio"
        },
        {
          route: "/contact",
          name: "Contacto"
        }
      ],
      expanded: props.expanded
    };
  }

  toggleExpand = () => {
    this.setState(prevState => {
      return { expanded: !prevState.expanded };
    }, this.conditionalScrollBottom());
  };

  conditionalToggleExpand = () => {
    const clientWidth = document.body.clientWidth;
    clientWidth <= 768 && this.toggleExpand();
  };

  conditionalScrollBottom = () => {
    const { currentPage } = this.props;
    const clientWidth = document.body.clientWidth;
    currentPage === "/" && clientWidth >= 700 && this._scrollToBottom();
  };

  _scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }, 200);
  };

  _mapMenuItems = () =>
    this.state.options.map(opt => (
      <MenuLink
        key={opt.name}
        to={opt.route}
        onClick={this.conditionalToggleExpand}
      >
        <MenuOption>
          <span>{opt.name.toUpperCase()}</span>
        </MenuOption>
      </MenuLink>
    ));

  render() {
    const { expanded, options } = this.state;
    const { absolute } = this.props;
    const items = (
      <Transition
        in={expanded}
        timeout={transitionDuration}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <AnimatedOpacity animationState={state}>
            {this._mapMenuItems()}
          </AnimatedOpacity>
        )}
      </Transition>
    );
    const menuBoxHeight = expanded
      ? options.length * optionHeight + options.length + initialMenuHeight
      : initialMenuHeight;

    return (
      <MenuBox absolute={absolute}>
        <MenuContainer height={menuBoxHeight}>
          <MenuHeader>
            <MenuItem>
              <span>META-MENU</span>
            </MenuItem>
            <MenuCaretBox onClick={this.toggleExpand}>
              <MenuArrow src={arrow} expanded={expanded} />
            </MenuCaretBox>
          </MenuHeader>
          {items}
        </MenuContainer>
      </MenuBox>
    );
  }
}

export default Menu;
