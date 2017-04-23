import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.state = {editing: false, value: this.props.value}
  }

  handleDelete(event) {
    this.props.onDelete(this.props.id);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  stopEditing(event) {
    this.setState({editing: false});
  }

  editItem(event) {
    this.setState({editing: true});
  }

  render() {
    if (this.state.editing) {
      return (
        <li>
          <input type="text" onChange={this.handleChange} onBlur={this.stopEditing}/>
        </li>
      );
    } else {
      return (
        <li>
          <p onClick={this.editItem}>{this.state.value}</p>
          <button onClick={this.handleDelete}>-</button>
        </li>
      );
    }
  }
}

export default Item;
