import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      color: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox({ ...this.state, id: uuidv4() });
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height(rem)</label>
          <input
            type="number"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width(rem)</label>
          <input
            type="number"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add New Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
