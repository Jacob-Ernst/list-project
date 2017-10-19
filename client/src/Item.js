import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.state = {
      editing: false,
      completed: false,
      item: this.props.item
    }
  }

  handleDelete(event) {
    this.props.onDelete(this.state.item._id);
  }

  handleInputChange(inputKey, newValue) {
    let newItem = this.state.item;
    newItem[inputKey] = newValue;
    this.setState({item: newItem});
  }

  stopEditing(event) {
    this.setState({editing: false});
  }

  editItem(event) {
    this.setState({editing: true});
  }

  render() {
    const item = this.props.item;
    if (this.state.editing) {
      return (
        <li>
          <input type="text" onChange={this.handleInputChange} onBlur={this.stopEditing}/>
        </li>
      );
    } else {
      return (
        <li>
          <p onClick={this.editItem}>{item.name}</p>
          <button onClick={this.handleDelete}>-</button>
        </li>
      );
    }
  }
}

export default Item;
