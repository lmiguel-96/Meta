import React from "react";

import { Home } from "../Home/Home";

export const routesNav = [
  {
    path: "/home",
    component: () => <Home />,
    exact: true
  },
  {
    path: "/about",
    component: () => null,
    exact: false
  },
  {
    path: "/services"
  },
  {
    path: "/our-works",
    component: () => null,
    exact: false
  },
  {
    path: "/contact",
    component: () => null,
    exact: false
  }
];
