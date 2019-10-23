import React, { Component } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { Animated } from "react-animated-css";
import arrayMove from "array-move";
import "./Cubes.scss";

const SortableItem = sortableElement(({ classStyle, cube }) => (
  <li className={classStyle}>
    <Animated animationIn="bounce" isVisible={true}>
      <Cube item={cube} />
    </Animated>
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul className="cubes-container ccontainer">{children}</ul>;
});

const Cube = ({ item }) => {
  // console.log(item);
  return (
    <div className="cube">
      <div className={`face ${item.actualCubeTheme} ${item.value} front`} />
      <div className={`face ${item.actualCubeTheme} top`} />
      <div className={`face ${item.actualCubeTheme} side`} />
    </div>
  );
};

export default class Cubes extends Component {
  state = {
    items: [
      {
        value: "M",
        actualCubeTheme: "normal-cube-theme",
        themeIndex: 1
      },
      {
        value: "E",
        actualCubeTheme: "normal-cube-theme",
        themeIndex: 1
      },
      {
        value: "T",
        actualCubeTheme: "normal-cube-theme",
        themeIndex: 1
      },
      {
        value: "A",
        actualCubeTheme: "normal-cube-theme",
        themeIndex: 1
      }
    ],
    themes: [
      "normal-cube-theme"
      // "red-cube-theme",
      // "blue-cube-theme",
      // "yellow-cube-theme"
    ]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(oldIndex);
    console.log(newIndex);
    console.log("Cantidad de Temas " + this.state.themes.length);

    const itemSelected = this.state.items[oldIndex];
    const themeIndexItemSelected = itemSelected.themeIndex;
    console.log(
      "El numero de tema de el cubo seleccionado es " + themeIndexItemSelected
    );

    itemSelected.actualCubeTheme = this.state.themes[
      themeIndexItemSelected % this.state.themes.length
    ];
    itemSelected.themeIndex = itemSelected.themeIndex + 1;

    console.log(`El item selecionado fue ${itemSelected.value}`);
    console.log(`El tema que tiene es  ${itemSelected.actualCubeTheme}`);

    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div className="main-container">
        <SortableContainer
          axis="xy"
          helperClass="dragging-helper-class"
          onSortEnd={this.onSortEnd}
        >
          {items.map((item, index) => (
            <SortableItem
              index={index}
              value={item.value}
              classStyle={`cube-container cube-${index + 1} box`}
              cube={item}
              key={index + 1}
            />
          ))}
        </SortableContainer>
      </div>
    );
  }
}
