import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.filterBoxes = this.filterBoxes.bind(this);
  }

  addBox(value) {
    this.setState({ boxes: [...this.state.boxes, value] });
  }

  filterBoxes(id) {
    let filt = this.state.boxes.filter((item) => item.id !== id);
    this.setState({
      boxes: filt,
    });
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            id={box.id}
            filterBoxes={this.filterBoxes}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
