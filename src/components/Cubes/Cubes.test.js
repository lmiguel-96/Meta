import React from "react";
import ReactDOM from "react-dom";
import Cubes from "./Cubes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Cubes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
