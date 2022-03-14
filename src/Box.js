import React, { Component } from "react";

export class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: this.props.color,
          }}
        >
          Box
        </div>
        <button
          onClick={() => {
            const { filterBoxes, id } = this.props;
            filterBoxes(id);
          }}
        >
          x
        </button>
      </div>
    );
  }
}

export default Box;
