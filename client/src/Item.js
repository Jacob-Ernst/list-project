import React, { Component } from 'react';
import MdRemoveCircleOutline from 'react-icons/lib/md/remove-circle-outline';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.state = {
      editing: false,
      params: { name: this.props.item.name, id: this.props.item._id }
    }
  }

  handleDelete(event) {
    this.props.onDelete(this.props.item._id);
  }

  handleInputChange(event) {
    let newParams = this.state.params;
    newParams['name'] = event.target.value;
    this.setState({params: newParams});
  }

  stopEditing(event) {
    const params = this.state.params;
    const item = this.props.item;
    this.setState({editing: false});

    if (params.name !== item.name) {
      this.props.onUpdate(params);
    }
  }

  editItem(event) {
    this.setState({editing: true});
  }

  render() {
    const params = this.state.params;

    if (this.state.editing) {
      return (
        <li>
          <input type="text" value={params.name} onChange={this.handleInputChange} onBlur={this.stopEditing}/>
        </li>
      );
    } else {
      return (
        <li>
          <p onClick={this.editItem}>{params.name}</p>
          <MdRemoveCircleOutline onClick={this.handleDelete}/>
        </li>
      );
    }
  }
}

export default Item;
